import React,{Component} from 'react';
import {DownloadWraper} from '../style';
class Download extends Component {
    render(){
        return(
               <DownloadWraper>
                <img className='smPic' src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                <div>
                    <h2>下载简书手机APP</h2>
                    <p>随时随地发现和创作内容</p>
                </div>
                    <div className="fade">
                    <img className="lgPic" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                     </div>
               </DownloadWraper>
        )
    }
}




export default Download;