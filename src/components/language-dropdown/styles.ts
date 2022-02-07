import styled from 'styled-components'

export const Container = styled.section.attrs({
    className: `
        relative
        inline-block
    `
})``

export const Button = styled.button.attrs({
    className: `
        pl-2
        pr-3
        bg-white
        shadow-sm
        rounded-md
        font-medium
        inline-flex
        items-center
        text-gray-700
        justify-between
        hover:bg-gray-50
    `
})`
    width: 90px;
    height: 44px;
    background: #f5f5f5;
    border-radius: 22px;
`

export const OptionContainer = styled.article.attrs({
    className: `
        origin-top-right
        absolute
        right-0
        mt-2
        py-1
        w-56
        rounded-md
        shadow-lg
        bg-white
        ring-1
        ring-black
        ring-opacity-5
        focus:outline-none
    `
})``

export const Option = styled.button.attrs({
    className: `
        p-3
    `
})``
