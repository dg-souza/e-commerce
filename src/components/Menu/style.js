import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    background: #8160c6;
    max-width: 50px;
    min-height: 100vh;
    overflow: hidden;
    transition: 0.4s;
    ${props => {
        if(props.toggle) {
            return `
                max-width: 200px;
            `
        } else {
            return `
                max-width: 50px;
            `
        }
    }}

    .toggler {
        z-index: 2;
            height: 50px;
            width: 50px;
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
            opacity: 0;

            &:checked+.hamburger .line {
                background: rgba(0, 0, 0, 0);
            }

            &:checked+.hamburger .line::before {
                top: 0;
                transform: rotate(45deg);
            }

            &:checked+.hamburger .line::after {
                top: 0;
                transform: rotate(135deg);
            }
    }

    .hamburger {
        position: absolute;
            top: 0;
            left: 0;
            height: 40px;
            width: 40px;
            padding: 5px;

            /* FOR DISPLAYING EVERY ELEMENT IN THE CENTER : */

            display: flex;
            align-items: center;
            justify-content: center;

            .line {
                position: relative;
                top: 0;
                left: 0;
                background: white;
                height: 2px;
                width: 60%;
                transition: all 0.4s ease;

                &::after {
                    content: '';
                    position: absolute;
                    top: -10px;
                    background: white;
                    width: 100%;
                    height: 2px;
                    transition: all 0.4s ease;
                    top: 10px;
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: -10px;
                    background: white;
                    width: 100%;
                    height: 2px;
                    transition: all 0.4s ease;
                }
            }
    }

    .menu-holder-items {
        margin-top: 60px;

        &-item {
            padding: 15px;
            transition: 0.3s;
            display: flex;
            flex-direction: row;
            align-items: center;

            span {
                color: #fff;
                display: none;
                padding: 10px;
            }

            img {
                width: 40px;
            }

            &:hover {
                cursor: pointer;
                background: #754ec7;
            }

            ${props => {
                if(props.toggle) {
                    return `
                        span {
                            display: flex;
                        }
                    `
                } else {
                    return `
                        span {
                            display: none;
                        }
                    `
                }
            }}
        }
    }

    #menu.open {
        max-width: 200px;
    }
`