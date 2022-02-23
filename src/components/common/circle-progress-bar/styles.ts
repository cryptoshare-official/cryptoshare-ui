import styled from 'styled-components'

export const Container = styled.div`
    color: #fff;
    margin: 20px;
    width: 200px;
    height: 200px;
    font-size: 30px;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    background: #07070c;
    text-align: center;
    line-height: 200px;

    &::after {
        content: '%';
    }

    &:nth-of-type(2) .right,
    &:nth-of-type(3) .right {
        animation: load2 0.5s linear forwards 1s;
    }

    &:last-of-type .right,
    &:first-of-type .right {
        animation: load3 0.8s linear forwards 1s;
    }

    @keyframes load1 {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(180deg);
        }
    }

    @keyframes load2 {
        0% {
            z-index: 100;
            transform: rotate(180deg);
        }

        100% {
            z-index: 100;
            transform: rotate(270deg);
        }
    }

    @keyframes load3 {
        0% {
            z-index: 100;
            transform: rotate(180deg);
        }

        100% {
            z-index: 100;
            transform: rotate(315deg);
        }
    }
`
export const Span = styled.div`
    position: relative;
    z-index: 100;
`

export const Overlay = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #07070c;
`

export const Right = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 10px solid #222235;
    border-radius: 100px 0px 0px 100px;
    border-right: 0;
    transform-origin: right;
`
export const Left = styled(Right)`
    animation: load1 1s linear forwards;
`
