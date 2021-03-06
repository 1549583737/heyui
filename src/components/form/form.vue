<template>
  <div :class="formCls">
    <slot></slot>
  </div>
</template>
<script>
import Validator from '../../plugins/validator';
import utils from '../../utils/utils';
import scrollIntoView from '../../plugins/scrollIntoView'

const prefixCls = 'h-form';

const findDomUtil = function(target, utilDom) {
  let now = target;
  while(now != utilDom) {
    if(utils.hasClass(now, 'h-form-item') && now.getAttribute('prop')) {
      return now;
    }
    now = now.parentElement;
  }
  return null;
}

export default {
  name: 'hForm',
  props: {
    top: {
      type: Number
    },
    topOffset: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String,
      default: "single" //inline,single,twocolumn
    },
    model: [Object, Array],
    labelWidth: {
      type: Number,
      default: 80
    },
    rules: Object,
    labelPosition: {
      type: String,
      default: "right" //left,right
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      messages: {},
      validator: null
    };
  },
  beforeMount() {
    // log('rule init', this.rules, this.validator);
    if (this.model && this.rules) this.validator = new Validator(this.rules);
  },
  mounted() {

    this.$nextTick(() => {
      this.$el.addEventListener("blur", (event) => {
        // this.trigger(event);
        if(event.target.tagName == 'INPUT' || event.target.tagName == 'TEXTAREA') {
          // log('blur', event.target)
          this.trigger(event.target);
        }
      }, true);
      this.$el.addEventListener("setvalue", (event) => {
        // this.trigger(event);
        // log('blur', event.target)
          this.trigger(event.target);
      });
    });
  },
  watch: {
    rules: {
      handler: function() {
        if (this.validator) {
          if (this.rules) this.validator.updateRule(this.rules);
        } else if (this.model && this.rules) {
          this.validator = new Validator(this.rules);
        }
      },
      deep: true
    }
  },
  methods: {
    reset() {
      for(let m in this.messages){
        this.messages[m].valid = true;
      }
    },
    trigger(target) {
      let formItem = findDomUtil(target, this.$el);
      if (formItem && formItem.getAttribute('validable') == 'true') {
        this.validField(formItem.getAttribute('prop'));
      }
    },
    validField(prop) {
      if (!prop || !this.validator || !this.model) {
        return { valid: true };
      }
      let returnResult = this.validator.validField(prop, this.model, (result) => {
        utils.extend(true, this.messages, result);
      }, this.model);
      // log(returnResult);
      utils.extend(true, this.messages, returnResult);
      return utils.extend({}, this.messages[prop]);
    },
    validFieldJs(prop, next) {
      if (!prop || !this.validator || !this.model) {
        return { valid: true };
      }
      let defaultM = this.messages[prop];
      let returnResult = this.validator.validField(prop, this.model, (result) => {
        next(utils.extend({}, defaultM, returnResult[prop]));
      }, this.model);
      return utils.extend({}, defaultM, returnResult[prop]);
    },
    setConfig(prop, options) {
      if (!this.validator) return false;
      this.validator.setConfig(prop, options);
    },
    getConfig(prop) {
      if (!this.validator) return false;
      return this.validator.getConfig(prop);
    },
    getErrorMessage(prop, label) {
      if(this.messages[prop]) return this.messages[prop];
      let message = { valid: true, message: null, label};
      this.messages[prop] = message;
      return message;
    },
    updateErrorMessage(prop, oldProp) {
      let message = utils.copy(this.messages[oldProp]);
      if (utils.isNull(message)) {
        message = { valid: true, message: null };
      }
      this.messages[prop] = message;
      return message;
    },
    removeProp(prop) {
      delete this.messages[prop];
    },
    renderMessage(returnResult) {
      let isSuccess = true;
      for (let r in returnResult) {
        if (!returnResult[r].valid) {
          isSuccess = false;
          break;
        }
      }
      utils.extend(true, this.messages, returnResult);
      if (!isSuccess) {
        this.$nextTick(() => {
          let firstError = this.$el.querySelector('.h-form-item-valid-error');
          if (firstError){
            scrollIntoView(firstError, {
              time: 500,
              align:{
                top: this.top,
                topOffset: this.topOffset
              }
            });
          }
        })
      }
      return { result: isSuccess, messages: utils.toArray(this.messages).filter(item => !item.valid) };
    },
    validAsync() {
      return new Promise((resolve, reject )=>{
        let result = this.valid((result)=>{
          resolve(this.renderMessage(result));
        })
      })
    },
    valid(next) {
      if (!this.validator || !this.model) {
        return { result: true, messages: [] };
      }
      let returnResult = this.validator.valid(this.model, (result) => {
        utils.extend(true, this.messages, result);
      }, (result) => {
        if(next) {
          next.call(null, result);
        }
      });
      return this.renderMessage(returnResult);
    }
  },
  computed: {
    formCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${this.mode}`]: true,
        [`${prefixCls}-label-${this.labelPosition}`]: !!this.labelPosition,
        [`${prefixCls}-readonly`]: this.readonly
      }
    }
  }
};
</script>
