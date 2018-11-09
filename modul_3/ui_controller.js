
import MaskInput from 'mask-input';

class UIController{

}
 
export default new UIController = new MaskInput (document.querySelector('.js-input-selector'), {
  mask: '0000-0000-0000-0000',
  alwaysShowMask: true,
  maskChar: '_',
  onChange() {
  	if (inputCard.value.match(/^(\d{4}-){3}\d{4}/) && name.value>=2) {
  		btn.disabled = false;
  	}else{
  		  btn.disabled = true;
  	}
  	
        if (inputCard.value.match(/^(\d{4}-){3}\d{4}/)) {
            inputCard.style.outlineColor = "green";
   
        } else {
       
            inputCard.style.outlineColor = "red";
          
        }

  }
});



