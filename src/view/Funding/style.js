import { styled } from "styled-components"
export default styled.div`

    .container{
        width: 80%;
        margin: 0 auto;
        .con-header{
            width:100%;
            display: flex;
           border-bottom: 0.1px solid rgb(255,255,255,0.1);
           .nav-item{
            margin-right: 3em;
            padding: 0.5em 0;
            cursor:pointer;
font-family: Roboto, Roboto;
font-weight: 500;
           }
        }
    }
 .box-container{
    width: 100%;
    margin: 2em 0em;
    .box-first{
        padding: 1.5em 1em;
        margin:1em auto;
        background: rgba(0,0,0,0.4);
box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.2);
border-radius: 20px 20px 20px 20px;
border: 1px solid rgba(255,255,255,0.15);
    }
 }
    .active{
        font-family: Roboto, Roboto;
        font-weight:600;
        border-bottom:2px solid #CC8A35;

    }
    .first-contain{
        display: flex;
        justify-content:space-between;
        padding: 5px 0;
            span{
                color: white;
                width: 90%;
                font-family: Roboto, Roboto;
font-weight: 500;
            }
        }
       
        .seconed-contain{
        display: flex;
        justify-content:space-between;
        padding: 5px 0;
        .contain-title{
            color: rgba(138, 128, 128, 1);
        }
            span{
font-family: Roboto, Roboto;
font-weight: 500;
                color: white;            
            }
        } 
        hr{
            opacity:0.1;
            margin: 15px 0;
        } 
        .seconed-box1{
            background: #272727;
border-radius: 10px 10px 10px 10px;
border: 1px solid rgba(255,255,255,0.1);
padding: 1em;
margin: 1em 0;
            .box1-con{
                display: flex;
                justify-content:space-between;
                margin-bottom:10px;
                span{
                    font-family: Roboto, Roboto;
font-weight: bold;
color: #FFFFFF;
                }
              
            }
        }
        .content-bold{
font-family: Roboto, Roboto;
font-weight: 900;
color: #FFFFFF;
        }
        .income-box{
           
            background: #1C1C1C;
box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.05);
border-radius: 20px 20px 20px 20px;
border: 1px solid rgba(255,255,255,0.15);
padding: 2em;
            p{
font-family: Roboto, Roboto;
font-weight: 500;
color: #8A8080;
            }
            span{
font-family: Roboto, Roboto;
font-weight: 900;
color: #FFFFFF;
vertical-align:top;
            }
        }

      
        .super-line,.super-list{
            .col{
margin-right: 1em;
text-align:left;
            }
        }
        .funding-form{
            overflow-x:scroll;
        }
        .funding-overall{
            width: 2100px;
        }
        .funding-line,.funding-list{
            .col{
margin-right: 1em;
text-align:left;
            }
        }
        .amount-box{
            background: rgb(39, 39, 39);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 10px 0;
    padding: 1em ;
    display: flex;

        }
        .btn-max{
            width: 20%;
            margin: 0 0 0 10px;
           span{
            color: black;
            font-weight: bold;
            font-size:16px;           
        } 
        }
.ant-btn{
    span{
        color:black;
        font-weight:bold;
    }
}

    @media screen and (max-width:1920px ){
        .nav-item{  
        font-size: 20px;

        line-height: 23px;
        }

        .box-first{
        margin:0 auto;
        width: 30%;
        padding: 1.5em 1em;
        }

        .first-contain{
            span{
                font-size: 16px;

            }
        }
        .seconed-contain{
            span{
                font-size: 16px;
            }
        }
        .content-bold{
            font-size: 26px;
line-height: 30px;
        }

        .income-box{
            p{
                font-size: 20px;
                line-height: 26px;
            }
            span{
                font-size: 26px;
                line-height: 34px;

            }
        }

        .super-line,.super-list{
            .col{
                padding: 0 2em;
                font-size: 18px;
                line-height: 23px;
                &:nth-child(1){
                    width: 10%;
                }
                &:nth-child(2){
                    width: 15%;
                }
                &:nth-child(3){
                    width: 15%;
                }
                &:nth-child(4){
                    width: 15%;
                }
                &:nth-child(5){
                    width: 20%;
                }
            }
        }
        .funding-line,.funding-list{
            .col{
                padding: 0 1em;
                font-size: 18px;
                line-height: 23px;
                &:nth-child(1){
                    width: 100px;
                }
                &:nth-child(2){
                    width: 100px;
                }
                &:nth-child(3){
                    width: 100px;
                }
                &:nth-child(4){
                    width: 120px;
                }
                &:nth-child(5){
                    width: 150px;
                }
                &:nth-child(6){
                    width: 200px;
                }
                &:nth-child(7){
                    width: 150px;
                }
                &:nth-child(8){
                    width: 150px;
                }
                &:nth-child(9){
                    width: 150px;
                }
                &:nth-child(10){
                    width: 150px;
                }
                &:nth-child(11){
                    width: 150px;
                }
                &:nth-child(12){
                    width: 200px;
                }
                
            }
        }
        .btn-max{
           span{
            font-size:16px;           
        } 
    }
    .ant-btn{
        span{
            font-size: 16px;
        }
    }
    }

    @media screen and (max-width:1440px ){
        .nav-item{
        line-height: 23px;

        }
    }

    @media screen and (max-width:450px ){
        .nav-item{
        line-height: 23px;

        }
    }
`