'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { Logo } from '@/assets/brands/Logo'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginSchema } from './schema'
import type { LoginInputs } from './types'

export const LoginForm: FC = () => {
  const {
    handleSubmit,
    formState: {}
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
    try {
      const response = await signIn('credentials', {
        email,
        password
      })

      if (!response.error) {
        throw new Error(response.error)
      }
    } catch (err) {
      console.error({
        'Error during login: ': err.message
      })
    }
  }

  return (
    <div className="flex w-full lg:min-h-[100vh] lg:justify-between">
      <section className="flex w-full max-w-[40%] items-center bg-white px-4 py-12 lg:py-16 2xl:max-w-[35%]">
        <div className="mx-auto flex w-full max-w-md flex-col items-center gap-8 lg:gap-12">
          <article className="flex w-full flex-col items-center">
            <Logo className="h-12 w-12 text-indigo-600" />
            <h1 className="mt-4 text-center text-lg font-semibold lg:text-2xl">
              Bem-vindo de volta
            </h1>
            <p className="mt-2 text-center text-sm text-neutral-600">
              Por favor insira suas credenciais para entrar e utilizar <br />
              nossa plataforma.
            </p>
          </article>
          <form
            className="flex w-full flex-col gap-4 rounded-xl bg-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-500">Email</label>
              <input
                className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-600 transition-all duration-300 outline-none focus:border-blue-500"
                placeholder="Email do seu usuário"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-500">Senha</label>
              <input
                className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-600 transition-all duration-300 outline-none focus:border-blue-500"
                placeholder="Senha referente ao seu email"
                type="text"
              />
            </div>
            <button className="mt-3 w-full cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-center text-white transition-all duration-300 hover:brightness-110">
              Entrar
            </button>
          </form>
          <p className="text-center text-[13px] text-neutral-500">
            By continuing, you agree to our{' '}
            <a
              className="text-[13px] text-neutral-500 underline underline-offset-2"
              href="#"
            >
              Terms
            </a>{' '}
            and{' '}
            <a
              className="text-[13px] text-neutral-500 underline underline-offset-2"
              href="#"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="-mt-8 text-end text-[13px] text-neutral-500">
            Esqueceu sua senha?{' '}
            <a className="font-medium text-neutral-700" href="#">
              Clique aqui
            </a>
          </p>
        </div>
      </section>
      <figure className="h-full w-full lg:min-h-[100vh]">
        <Image
          alt="Background Image"
          className="h-full w-full object-cover object-center lg:min-h-[100vh]"
          height={2400}
          src="https://wallpaperswide.com/download/luxury_hotel_room-wallpaper-3840x2400.jpg"
          width={3840}
        />
      </figure>
    </div>
  )
}
