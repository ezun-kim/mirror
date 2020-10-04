import Vue from "vue"; // 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // 설치했던 아이콘파일에서 해당 아이콘만 불러옵니다. 
import { faAddressCard, faLink, faLock, faLockOpen, faRedo, faUndo } from "@fortawesome/free-solid-svg-icons"; 
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"; // 불러온 아이콘을 라이브러리에 담습니다. 

library.add(faLock); 
library.add(faLockOpen); 
library.add(faAddressCard); 
library.add(faTrashAlt); 

library.add(faLink, faRedo, faUndo);


Vue.component("font-awesome-icon", FontAwesomeIcon);