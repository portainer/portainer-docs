function embedHFWidget()

{var embedButton=document.createElement('a');embedButton.style.zIndex='2147483646';embedButton.style.backgroundColor='#13BEF'?'##13BEF':'#333';embedButton.innerHTML='Contact Us'?'Contact Us':'Contact Us';

embedButton.style.color='#FFF';var buttonCss='position: fixed; padding: 10px 20px 10px 20px;background-color:#e86a25; font-size:15.4px;';if('r'=='l'){embedButton.style.cssText+=buttonCss+'top: 80%; right: 0; background-color:#e86a25;'}else{embedButton.style.cssText+=buttonCss+'top: 80%; right: 0; background-color:#e86a25;'}embedButton.style.cursor='pointer';embedButton.style.textDecoration='none';



embedButton.addEventListener('click', function embed(){var embedDiv=document.createElement('div');embedDiv.style.border='0';embedDiv.style.position='fixed';embedDiv.style.top='0';embedDiv.style.left='0';embedDiv.style.right='0';embedDiv.style.bottom='0';embedDiv.style.width='100%';embedDiv.style.height='100%';embedDiv.style.overflow='hidden';embedDiv.style.zIndex='2147483647';function removeDiv(){var divToRemove=document.getElementById('embedDiv');if(divToRemove){divToRemove.parentNode.removeChild(divToRemove);return false;}};embedDiv.id='embedDiv';embedDiv.addEventListener('click',removeDiv,false);document.body.appendChild(embedDiv);var iframe=document.createElement('iframe');iframe.src='https://portainer.happyfox.com/supportwidgets/code_support_widget/1';iframe.style.position='absolute';iframe.style.border='0';iframe.style.background='none transparent';iframe.style.width='50%';iframe.style.height='80%';iframe.style.top='10%';iframe.style.left='25%';iframe.addEventListener('load',function resizeIframe(){var grayDiv=document.getElementById('embedDiv');grayDiv.style.backgroundColor='rgba(0,0,0,0.3)';grayDiv.appendChild(closeIframe);},false);iframe.id='embedWidget';iframe.frameborder='0';iframe.allowTransparency='true';embedDiv.appendChild(iframe);var closeIframe=document.createElement('img');closeIframe.type='button';closeIframe.addEventListener('click',removeDiv,false);closeIframe.src='https://portainer.happyfox.com/media/img/1415967259__close.png';closeIframe.className='supportwidgetclose';},false);document.body.appendChild(embedButton);}



window.onload=embedHFWidget;