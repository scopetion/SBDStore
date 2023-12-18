
import {createGlobalStyle} from 'styled-components';
export const AntdStyle = createGlobalStyle`
    .ant-btn{
        color:black;
        margin-top: 10px;
        background: linear-gradient(229deg, #DAB163 0%, #CC8A35 100%);
     width: 100%;
     height: 40px;
        border-radius:10px;
        border: 0px;
        text-align:center;
        
   }
   .ant-btn:active, .ant-btn:focus, .ant-btn:hover {
    text-decoration: none;
    color: black;
background: linear-gradient(229deg, #DAB163 0%, #CC8A35 100%);
}
.ant-modal-title {
    text-align:center;
    color:white;
    font-size:22px;
}
.anticon {
    color: white;
}
.ant-modal-close-x {
    font-size: 22px;
}
.ant-modal-content {
    background-color: rgba(19, 19, 19, 1);
}
.ant-modal-header {
    background-color: rgba(19, 19, 19, 1);

}
.ant-row {
    display: block;
}
.ant-form-item-label>label {
font-family: Roboto, Roboto;
font-weight: bold;
color: #8A8080;
}
.ant-form-item-label>label:after {
    content: "";
}
.ant-form-item-control-input {
    background: #272727;
border-radius: 10px 10px 10px 10px;
border: 1px solid rgba(255,255,255,0.1);
color: white;
height: 40px;
}
.ant-input{
    background: #272727;
border-radius: 10px 10px 10px 10px;
border: 0.5px solid rgba(255,255,255,0.1);
color: white;
height: 40px;
}
@media screen and (max-width: 1920px){
    .ant-btn{
        font-size: 18px;
font-family: Roboto, Roboto;
font-weight: 600;
line-height: 23px;
    }

    .ant-form-item-label>label {
    font-size: 20px;
line-height: 23px;
}
}

@media screen and (max-width: 1440px){
    .ant-btn{
        font-size: ;
font-family: Roboto, Roboto;
font-weight: 600;
line-height: ;
    }
}
`