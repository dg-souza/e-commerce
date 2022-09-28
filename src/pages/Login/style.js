import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 250px;

    .container-handle {
        display: flex;
        flex-direction: row;
        box-shadow: 0px 1px 6px -1px #000000;

        &-info {
            background: #8160c6;
            min-width: 500px;
            min-height: 500px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                font-size: 30px;
                color: #fff;
            }
        }

        &-login {
            background: #fff;
            min-width: 350px;
            min-height: 200px;
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 0.4s;

            input {
                border: 1px solid #8160c6;
                padding: 15px;
                color: #8160c6;
                border-radius: 2px;
                width: 80%;
                font-size: 16px;
                outline: none;
                margin-top: 20px;

                &::placeholder {
                    color: #8160c6;
                }
            }

            button {
                border: none;

                margin-top: 20px;
                padding: 15px;
                width: 90%;
                color: #fff;
                background: #8160c6;
                box-shadow: 0px 1px 6px -1px #000000;
                transition: 0.4s;

                &:hover {
                    cursor: pointer;
                    background: #7953c9;
                }
            }

            h1 {
                color: #7953c9;
                font-weight: normal;
            }
        }
    }

    @media(max-width: 870px) {
        .container-handle-info {
            display: none;
        }

        .container-handle-login {
            min-height: 500px;
            border-radius: 4px;
        }
    }
`