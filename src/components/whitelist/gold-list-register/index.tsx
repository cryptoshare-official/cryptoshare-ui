import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import locales from '@/locales/pages/whitelist'
import { GoldListRegisterProps } from '../@types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitelistTranslateType } from '@/locales/types'
import AppSection from '@/components/common/app-section'
import {
    Card,
    Form,
    Label,
    Input,
    Span,
    Button,
    Container,
    FormGroup
} from './styles'

const emailForm = yup.object().shape({
    email: yup.string().email('Email invalido').required('Insira um email.')
})

const GoldListRegister: React.FC<GoldListRegisterProps> = props => {
    const translate = useTranslate<WhitelistTranslateType>(locales)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(emailForm)
    })

    const onSubmit = (data: any) => {
        console.log('RESPONSE :::', data)
    }

    return (
        <Container>
            <AppSection title={translate.openingGoldList} subtitle="25/03/2022">
                <Card>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label>{translate.registerYourEmail}</Label>
                            <Input {...register('email')} />
                            <Span>{errors.email?.message}</Span>
                        </FormGroup>

                        <Button type="submit">
                            {translate.registerInterest}
                        </Button>
                    </Form>
                </Card>
            </AppSection>
        </Container>
    )
}

export default GoldListRegister
