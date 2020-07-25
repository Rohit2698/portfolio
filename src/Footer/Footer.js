import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component{

    render(){
        return(
            <>
            <div className="container-fluid copy_main" style={{backgroundColor:"rgba(0, 0, 0, 0.253)"}}>
                <div className="copyright">
                    <div className="social_info">
                        <div>
                        <i class="fa fa-copyright"></i> Copyright Rohit_Thakur
                        </div>
                        <div>
                            <ul className="logoss">
                                <li><a href="https://www.instagram.com/rohitthakur09/" target='_blank'><i class="fa fa-instagram"></i></a></li>
                                <li><a href="https://github.com/Rohit2698" target='_blank'><i class="fa fa-github"></i></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100011539634187" target='_blank'><i class="fa fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Footer;