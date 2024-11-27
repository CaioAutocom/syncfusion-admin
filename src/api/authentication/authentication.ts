/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 1.0
 */
import {
  useMutation
} from '@tanstack/vue-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationReturnType
} from '@tanstack/vue-query'
import {
  unref
} from 'vue'
import type {
  MaybeRef
} from 'vue'
import type {
  CreateAccessTokenRequest,
  HttpValidationProblemDetails,
  ProblemDetails,
  RefreshTokenRequest,
  TokenResponse
} from '../../interfaces/api/Identity'
import { customInstance } from '.././api-interceptor';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Realiza autenticação do usuário com base nas credenciais fornecidas
 */
export const autenticarOUsuário = (
    createAccessTokenRequest: MaybeRef<CreateAccessTokenRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      createAccessTokenRequest = unref(createAccessTokenRequest);
      
      return customInstance<TokenResponse>(
      {url: `/api/token/create`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createAccessTokenRequest, signal
    },
      options);
    }
  


export const getAutenticarOUsuárioMutationOptions = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof autenticarOUsuário>>, TError,{data: CreateAccessTokenRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof autenticarOUsuário>>, TError,{data: CreateAccessTokenRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof autenticarOUsuário>>, {data: CreateAccessTokenRequest}> = (props) => {
          const {data} = props ?? {};

          return  autenticarOUsuário(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AutenticarOUsuárioMutationResult = NonNullable<Awaited<ReturnType<typeof autenticarOUsuário>>>
    export type AutenticarOUsuárioMutationBody = CreateAccessTokenRequest
    export type AutenticarOUsuárioMutationError = HttpValidationProblemDetails | ProblemDetails

    /**
 * @summary Realiza autenticação do usuário com base nas credenciais fornecidas
 */
export const useAutenticarOUsuario = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof autenticarOUsuário>>, TError,{data: CreateAccessTokenRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof autenticarOUsuário>>,
        TError,
        {data: CreateAccessTokenRequest},
        TContext
      > => {

      const mutationOptions = getAutenticarOUsuárioMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Realiza autenticação do usuário com base no refresh token.
 */
export const refreshToken = (
    refreshTokenRequest: MaybeRef<RefreshTokenRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      refreshTokenRequest = unref(refreshTokenRequest);
      
      return customInstance<TokenResponse>(
      {url: `/api/token/refresh`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: refreshTokenRequest, signal
    },
      options);
    }
  


export const getRefreshTokenMutationOptions = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError,{data: RefreshTokenRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError,{data: RefreshTokenRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof refreshToken>>, {data: RefreshTokenRequest}> = (props) => {
          const {data} = props ?? {};

          return  refreshToken(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type RefreshTokenMutationResult = NonNullable<Awaited<ReturnType<typeof refreshToken>>>
    export type RefreshTokenMutationBody = RefreshTokenRequest
    export type RefreshTokenMutationError = HttpValidationProblemDetails | ProblemDetails

    /**
 * @summary Realiza autenticação do usuário com base no refresh token.
 */
export const useRefreshToken = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError,{data: RefreshTokenRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof refreshToken>>,
        TError,
        {data: RefreshTokenRequest},
        TContext
      > => {

      const mutationOptions = getRefreshTokenMutationOptions(options);

      return useMutation(mutationOptions);
    }
    