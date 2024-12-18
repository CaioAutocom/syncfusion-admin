/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/vue-query'
import type {
  DataTag,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationReturnType,
  UseQueryOptions,
  UseQueryReturnType
} from '@tanstack/vue-query'
import {
  unref
} from 'vue'
import type {
  MaybeRef
} from 'vue'
import type {
  AlterarStatusDoUsuárioParams,
  AtualizarUsuárioParaTenantParams,
  ConfirmarEMailParams,
  ConfirmarTelefoneParams,
  CreateUserRequest,
  ForgotPasswordRequest,
  HttpValidationProblemDetails,
  ObterListaDePerfisParams,
  ObterListaDeUsuáriosParams,
  ObterPermissõesDoUsuárioPorIdParams,
  ObterUsuárioPorIdParams,
  ProblemDetails,
  ResetPasswordRequest,
  ToggleUserStatusRequest,
  UserDetailsDto,
  UserDetailsDtoIPagedList,
  UserLoginRequest,
  UserLoginResponse,
  UserRoleDto,
  UserTenantCreateUpdateRequest
} from '../../interfaces/api/Identity'
import { customInstance } from '.././api-interceptor';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Loga usuário fornecendo lista de tenants que usuário tem acesso.
 */
export const loginUsuário = (
    userLoginRequest: MaybeRef<UserLoginRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      userLoginRequest = unref(userLoginRequest);
      
      return customInstance<UserLoginResponse>(
      {url: `/api/user/login`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: userLoginRequest, signal
    },
      options);
    }
  


export const getLoginUsuárioMutationOptions = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof loginUsuário>>, TError,{data: UserLoginRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof loginUsuário>>, TError,{data: UserLoginRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof loginUsuário>>, {data: UserLoginRequest}> = (props) => {
          const {data} = props ?? {};

          return  loginUsuário(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type LoginUsuárioMutationResult = NonNullable<Awaited<ReturnType<typeof loginUsuário>>>
    export type LoginUsuárioMutationBody = UserLoginRequest
    export type LoginUsuárioMutationError = HttpValidationProblemDetails | ProblemDetails

    /**
 * @summary Loga usuário fornecendo lista de tenants que usuário tem acesso.
 */
export const useLoginUsuário = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof loginUsuário>>, TError,{data: UserLoginRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof loginUsuário>>,
        TError,
        {data: UserLoginRequest},
        TContext
      > => {

      const mutationOptions = getLoginUsuárioMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Confirma e-mail do usuário através de código.
 */
export const confirmarEMail = (
    params: MaybeRef<ConfirmarEMailParams>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      params = unref(params);
      
      return customInstance<string>(
      {url: `/api/user/confirm-email`, method: 'POST',
        params: unref(params), signal
    },
      options);
    }
  


export const getConfirmarEMailMutationOptions = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof confirmarEMail>>, TError,{params: ConfirmarEMailParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof confirmarEMail>>, TError,{params: ConfirmarEMailParams}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof confirmarEMail>>, {params: ConfirmarEMailParams}> = (props) => {
          const {params} = props ?? {};

          return  confirmarEMail(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ConfirmarEMailMutationResult = NonNullable<Awaited<ReturnType<typeof confirmarEMail>>>
    
    export type ConfirmarEMailMutationError = ProblemDetails

    /**
 * @summary Confirma e-mail do usuário através de código.
 */
export const useConfirmarEMail = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof confirmarEMail>>, TError,{params: ConfirmarEMailParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof confirmarEMail>>,
        TError,
        {params: ConfirmarEMailParams},
        TContext
      > => {

      const mutationOptions = getConfirmarEMailMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Confirma telefone do usuário através de código.
 */
export const confirmarTelefone = (
    params: MaybeRef<ConfirmarTelefoneParams>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      params = unref(params);
      
      return customInstance<string>(
      {url: `/api/user/confirm-phone-number`, method: 'POST',
        params: unref(params), signal
    },
      options);
    }
  


export const getConfirmarTelefoneMutationOptions = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof confirmarTelefone>>, TError,{params: ConfirmarTelefoneParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof confirmarTelefone>>, TError,{params: ConfirmarTelefoneParams}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof confirmarTelefone>>, {params: ConfirmarTelefoneParams}> = (props) => {
          const {params} = props ?? {};

          return  confirmarTelefone(params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ConfirmarTelefoneMutationResult = NonNullable<Awaited<ReturnType<typeof confirmarTelefone>>>
    
    export type ConfirmarTelefoneMutationError = ProblemDetails

    /**
 * @summary Confirma telefone do usuário através de código.
 */
export const useConfirmarTelefone = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof confirmarTelefone>>, TError,{params: ConfirmarTelefoneParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof confirmarTelefone>>,
        TError,
        {params: ConfirmarTelefoneParams},
        TContext
      > => {

      const mutationOptions = getConfirmarTelefoneMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Solicitação de redefinição de senha.
 */
export const esqueciMinhaSenha = (
    forgotPasswordRequest: MaybeRef<ForgotPasswordRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      forgotPasswordRequest = unref(forgotPasswordRequest);
      
      return customInstance<string>(
      {url: `/api/user/forgot-password`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: forgotPasswordRequest, signal
    },
      options);
    }
  


export const getEsqueciMinhaSenhaMutationOptions = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof esqueciMinhaSenha>>, TError,{data: ForgotPasswordRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof esqueciMinhaSenha>>, TError,{data: ForgotPasswordRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof esqueciMinhaSenha>>, {data: ForgotPasswordRequest}> = (props) => {
          const {data} = props ?? {};

          return  esqueciMinhaSenha(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EsqueciMinhaSenhaMutationResult = NonNullable<Awaited<ReturnType<typeof esqueciMinhaSenha>>>
    export type EsqueciMinhaSenhaMutationBody = ForgotPasswordRequest
    export type EsqueciMinhaSenhaMutationError = ProblemDetails

    /**
 * @summary Solicitação de redefinição de senha.
 */
export const useEsqueciMinhaSenha = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof esqueciMinhaSenha>>, TError,{data: ForgotPasswordRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof esqueciMinhaSenha>>,
        TError,
        {data: ForgotPasswordRequest},
        TContext
      > => {

      const mutationOptions = getEsqueciMinhaSenhaMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Redefinição de senha.
 */
export const redefinirSenha = (
    resetPasswordRequest: MaybeRef<ResetPasswordRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      resetPasswordRequest = unref(resetPasswordRequest);
      
      return customInstance<string>(
      {url: `/api/user/reset-password`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: resetPasswordRequest, signal
    },
      options);
    }
  


export const getRedefinirSenhaMutationOptions = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof redefinirSenha>>, TError,{data: ResetPasswordRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof redefinirSenha>>, TError,{data: ResetPasswordRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof redefinirSenha>>, {data: ResetPasswordRequest}> = (props) => {
          const {data} = props ?? {};

          return  redefinirSenha(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type RedefinirSenhaMutationResult = NonNullable<Awaited<ReturnType<typeof redefinirSenha>>>
    export type RedefinirSenhaMutationBody = ResetPasswordRequest
    export type RedefinirSenhaMutationError = ProblemDetails

    /**
 * @summary Redefinição de senha.
 */
export const useRedefinirSenha = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof redefinirSenha>>, TError,{data: ResetPasswordRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof redefinirSenha>>,
        TError,
        {data: ResetPasswordRequest},
        TContext
      > => {

      const mutationOptions = getRedefinirSenhaMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Localiza usuário por Id.
 */
export const obterUsuárioPorId = (
    params: MaybeRef<ObterUsuárioPorIdParams>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      params = unref(params);
      
      return customInstance<UserDetailsDto>(
      {url: `/api/user/id`, method: 'GET',
        params: unref(params), signal
    },
      options);
    }
  

export const getObterUsuárioPorIdQueryKey = (params: MaybeRef<ObterUsuárioPorIdParams>,) => {
    return ['api','user','id', ...(params ? [params]: [])] as const;
    }

    
export const getObterUsuárioPorIdQueryOptions = <TData = Awaited<ReturnType<typeof obterUsuárioPorId>>, TError = ProblemDetails>(params: MaybeRef<ObterUsuárioPorIdParams>, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof obterUsuárioPorId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  getObterUsuárioPorIdQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof obterUsuárioPorId>>> = ({ signal }) => obterUsuárioPorId(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof obterUsuárioPorId>>, TError, TData> 
}

export type ObterUsuárioPorIdQueryResult = NonNullable<Awaited<ReturnType<typeof obterUsuárioPorId>>>
export type ObterUsuárioPorIdQueryError = ProblemDetails


/**
 * @summary Localiza usuário por Id.
 */

export function useObterUsuárioPorId<TData = Awaited<ReturnType<typeof obterUsuárioPorId>>, TError = ProblemDetails>(
 params: MaybeRef<ObterUsuárioPorIdParams>, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof obterUsuárioPorId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ): UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getObterUsuárioPorIdQueryOptions(params,options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = unref(queryOptions).queryKey as DataTag<QueryKey, TData>;

  return query;
}



/**
 * @summary Lista todos os usuários cadastrados.
 */
export const obterListaDeUsuários = (
    params?: MaybeRef<ObterListaDeUsuáriosParams>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      params = unref(params);
      
      return customInstance<UserDetailsDtoIPagedList>(
      {url: `/api/user/all`, method: 'GET',
        params: unref(params), signal
    },
      options);
    }
  

export const getObterListaDeUsuáriosQueryKey = (params?: MaybeRef<ObterListaDeUsuáriosParams>,) => {
    return ['api','user','all', ...(params ? [params]: [])] as const;
    }

    
export const getObterListaDeUsuáriosQueryOptions = <TData = Awaited<ReturnType<typeof obterListaDeUsuários>>, TError = ProblemDetails>(params?: MaybeRef<ObterListaDeUsuáriosParams>, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof obterListaDeUsuários>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  getObterListaDeUsuáriosQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof obterListaDeUsuários>>> = ({ signal }) => obterListaDeUsuários(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof obterListaDeUsuários>>, TError, TData> 
}

export type ObterListaDeUsuáriosQueryResult = NonNullable<Awaited<ReturnType<typeof obterListaDeUsuários>>>
export type ObterListaDeUsuáriosQueryError = ProblemDetails


/**
 * @summary Lista todos os usuários cadastrados.
 */

export function useObterListaDeUsuários<TData = Awaited<ReturnType<typeof obterListaDeUsuários>>, TError = ProblemDetails>(
 params?: MaybeRef<ObterListaDeUsuáriosParams>, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof obterListaDeUsuários>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ): UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getObterListaDeUsuáriosQueryOptions(params,options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = unref(queryOptions).queryKey as DataTag<QueryKey, TData>;

  return query;
}



/**
 * @summary Lista todos os perfis cadastrados.
 */
export const obterListaDePerfis = (
    params: MaybeRef<ObterListaDePerfisParams>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      params = unref(params);
      
      return customInstance<UserRoleDto[]>(
      {url: `/api/user/roles`, method: 'GET',
        params: unref(params), signal
    },
      options);
    }
  

export const getObterListaDePerfisQueryKey = (params: MaybeRef<ObterListaDePerfisParams>,) => {
    return ['api','user','roles', ...(params ? [params]: [])] as const;
    }

    
export const getObterListaDePerfisQueryOptions = <TData = Awaited<ReturnType<typeof obterListaDePerfis>>, TError = ProblemDetails>(params: MaybeRef<ObterListaDePerfisParams>, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof obterListaDePerfis>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  getObterListaDePerfisQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof obterListaDePerfis>>> = ({ signal }) => obterListaDePerfis(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof obterListaDePerfis>>, TError, TData> 
}

export type ObterListaDePerfisQueryResult = NonNullable<Awaited<ReturnType<typeof obterListaDePerfis>>>
export type ObterListaDePerfisQueryError = ProblemDetails


/**
 * @summary Lista todos os perfis cadastrados.
 */

export function useObterListaDePerfis<TData = Awaited<ReturnType<typeof obterListaDePerfis>>, TError = ProblemDetails>(
 params: MaybeRef<ObterListaDePerfisParams>, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof obterListaDePerfis>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ): UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getObterListaDePerfisQueryOptions(params,options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = unref(queryOptions).queryKey as DataTag<QueryKey, TData>;

  return query;
}



/**
 * @summary Cria um novo usuário.
 */
export const criarUsuário = (
    createUserRequest: MaybeRef<CreateUserRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      createUserRequest = unref(createUserRequest);
      
      return customInstance<string>(
      {url: `/api/user/create`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createUserRequest, signal
    },
      options);
    }
  


export const getCriarUsuárioMutationOptions = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof criarUsuário>>, TError,{data: CreateUserRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof criarUsuário>>, TError,{data: CreateUserRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof criarUsuário>>, {data: CreateUserRequest}> = (props) => {
          const {data} = props ?? {};

          return  criarUsuário(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CriarUsuárioMutationResult = NonNullable<Awaited<ReturnType<typeof criarUsuário>>>
    export type CriarUsuárioMutationBody = CreateUserRequest
    export type CriarUsuárioMutationError = HttpValidationProblemDetails | ProblemDetails

    /**
 * @summary Cria um novo usuário.
 */
export const useCriarUsuário = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof criarUsuário>>, TError,{data: CreateUserRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof criarUsuário>>,
        TError,
        {data: CreateUserRequest},
        TContext
      > => {

      const mutationOptions = getCriarUsuárioMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Cria um novo usuário, na api identidade e na base do tenant.
 */
export const criarUsuárioNoTenant = (
    createUserRequest: MaybeRef<CreateUserRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      createUserRequest = unref(createUserRequest);
      
      return customInstance<string>(
      {url: `/api/user/create-in-tenant`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createUserRequest, signal
    },
      options);
    }
  


export const getCriarUsuárioNoTenantMutationOptions = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof criarUsuárioNoTenant>>, TError,{data: CreateUserRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof criarUsuárioNoTenant>>, TError,{data: CreateUserRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof criarUsuárioNoTenant>>, {data: CreateUserRequest}> = (props) => {
          const {data} = props ?? {};

          return  criarUsuárioNoTenant(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CriarUsuárioNoTenantMutationResult = NonNullable<Awaited<ReturnType<typeof criarUsuárioNoTenant>>>
    export type CriarUsuárioNoTenantMutationBody = CreateUserRequest
    export type CriarUsuárioNoTenantMutationError = HttpValidationProblemDetails | ProblemDetails

    /**
 * @summary Cria um novo usuário, na api identidade e na base do tenant.
 */
export const useCriarUsuárioNoTenant = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof criarUsuárioNoTenant>>, TError,{data: CreateUserRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof criarUsuárioNoTenant>>,
        TError,
        {data: CreateUserRequest},
        TContext
      > => {

      const mutationOptions = getCriarUsuárioNoTenantMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Localiza permissões do usuário por Id.
 */
export const obterPermissõesDoUsuárioPorId = (
    params: MaybeRef<ObterPermissõesDoUsuárioPorIdParams>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      params = unref(params);
      
      return customInstance<string[]>(
      {url: `/api/user/permissions`, method: 'GET',
        params: unref(params), signal
    },
      options);
    }
  

export const getObterPermissõesDoUsuárioPorIdQueryKey = (params: MaybeRef<ObterPermissõesDoUsuárioPorIdParams>,) => {
    return ['api','user','permissions', ...(params ? [params]: [])] as const;
    }

    
export const getObterPermissõesDoUsuárioPorIdQueryOptions = <TData = Awaited<ReturnType<typeof obterPermissõesDoUsuárioPorId>>, TError = ProblemDetails>(params: MaybeRef<ObterPermissõesDoUsuárioPorIdParams>, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof obterPermissõesDoUsuárioPorId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  getObterPermissõesDoUsuárioPorIdQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof obterPermissõesDoUsuárioPorId>>> = ({ signal }) => obterPermissõesDoUsuárioPorId(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof obterPermissõesDoUsuárioPorId>>, TError, TData> 
}

export type ObterPermissõesDoUsuárioPorIdQueryResult = NonNullable<Awaited<ReturnType<typeof obterPermissõesDoUsuárioPorId>>>
export type ObterPermissõesDoUsuárioPorIdQueryError = ProblemDetails


/**
 * @summary Localiza permissões do usuário por Id.
 */

export function useObterPermissõesDoUsuárioPorId<TData = Awaited<ReturnType<typeof obterPermissõesDoUsuárioPorId>>, TError = ProblemDetails>(
 params: MaybeRef<ObterPermissõesDoUsuárioPorIdParams>, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof obterPermissõesDoUsuárioPorId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ): UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getObterPermissõesDoUsuárioPorIdQueryOptions(params,options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = unref(queryOptions).queryKey as DataTag<QueryKey, TData>;

  return query;
}



/**
 * @summary Ativa ou desativa um usuário.
 */
export const alterarStatusDoUsuário = (
    toggleUserStatusRequest: MaybeRef<ToggleUserStatusRequest>,
    params: MaybeRef<AlterarStatusDoUsuárioParams>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      toggleUserStatusRequest = unref(toggleUserStatusRequest);
params = unref(params);
      
      return customInstance<string>(
      {url: `/api/user/toggle-status`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: toggleUserStatusRequest,
        params: unref(params), signal
    },
      options);
    }
  


export const getAlterarStatusDoUsuárioMutationOptions = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof alterarStatusDoUsuário>>, TError,{data: ToggleUserStatusRequest;params: AlterarStatusDoUsuárioParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof alterarStatusDoUsuário>>, TError,{data: ToggleUserStatusRequest;params: AlterarStatusDoUsuárioParams}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof alterarStatusDoUsuário>>, {data: ToggleUserStatusRequest;params: AlterarStatusDoUsuárioParams}> = (props) => {
          const {data,params} = props ?? {};

          return  alterarStatusDoUsuário(data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AlterarStatusDoUsuárioMutationResult = NonNullable<Awaited<ReturnType<typeof alterarStatusDoUsuário>>>
    export type AlterarStatusDoUsuárioMutationBody = ToggleUserStatusRequest
    export type AlterarStatusDoUsuárioMutationError = HttpValidationProblemDetails | ProblemDetails

    /**
 * @summary Ativa ou desativa um usuário.
 */
export const useAlterarStatusDoUsuário = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof alterarStatusDoUsuário>>, TError,{data: ToggleUserStatusRequest;params: AlterarStatusDoUsuárioParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof alterarStatusDoUsuário>>,
        TError,
        {data: ToggleUserStatusRequest;params: AlterarStatusDoUsuárioParams},
        TContext
      > => {

      const mutationOptions = getAlterarStatusDoUsuárioMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Cria um usuário para os tenants especificados.
 */
export const criarUsuárioParaTenant = (
    userTenantCreateUpdateRequest: MaybeRef<UserTenantCreateUpdateRequest>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      userTenantCreateUpdateRequest = unref(userTenantCreateUpdateRequest);
      
      return customInstance<string>(
      {url: `/api/user/create-user-tenant`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: userTenantCreateUpdateRequest, signal
    },
      options);
    }
  


export const getCriarUsuárioParaTenantMutationOptions = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof criarUsuárioParaTenant>>, TError,{data: UserTenantCreateUpdateRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof criarUsuárioParaTenant>>, TError,{data: UserTenantCreateUpdateRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof criarUsuárioParaTenant>>, {data: UserTenantCreateUpdateRequest}> = (props) => {
          const {data} = props ?? {};

          return  criarUsuárioParaTenant(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CriarUsuárioParaTenantMutationResult = NonNullable<Awaited<ReturnType<typeof criarUsuárioParaTenant>>>
    export type CriarUsuárioParaTenantMutationBody = UserTenantCreateUpdateRequest
    export type CriarUsuárioParaTenantMutationError = ProblemDetails

    /**
 * @summary Cria um usuário para os tenants especificados.
 */
export const useCriarUsuárioParaTenant = <TError = ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof criarUsuárioParaTenant>>, TError,{data: UserTenantCreateUpdateRequest}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof criarUsuárioParaTenant>>,
        TError,
        {data: UserTenantCreateUpdateRequest},
        TContext
      > => {

      const mutationOptions = getCriarUsuárioParaTenantMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Atualiza um usuário para os tenants especificados.
 */
export const atualizarUsuárioParaTenant = (
    userTenantCreateUpdateRequest: MaybeRef<UserTenantCreateUpdateRequest>,
    params: MaybeRef<AtualizarUsuárioParaTenantParams>,
 options?: SecondParameter<typeof customInstance>,) => {
      userTenantCreateUpdateRequest = unref(userTenantCreateUpdateRequest);
params = unref(params);
      
      return customInstance<string>(
      {url: `/api/user/update-user-tenant`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: userTenantCreateUpdateRequest,
        params: unref(params)
    },
      options);
    }
  


export const getAtualizarUsuárioParaTenantMutationOptions = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof atualizarUsuárioParaTenant>>, TError,{data: UserTenantCreateUpdateRequest;params: AtualizarUsuárioParaTenantParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof atualizarUsuárioParaTenant>>, TError,{data: UserTenantCreateUpdateRequest;params: AtualizarUsuárioParaTenantParams}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof atualizarUsuárioParaTenant>>, {data: UserTenantCreateUpdateRequest;params: AtualizarUsuárioParaTenantParams}> = (props) => {
          const {data,params} = props ?? {};

          return  atualizarUsuárioParaTenant(data,params,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AtualizarUsuárioParaTenantMutationResult = NonNullable<Awaited<ReturnType<typeof atualizarUsuárioParaTenant>>>
    export type AtualizarUsuárioParaTenantMutationBody = UserTenantCreateUpdateRequest
    export type AtualizarUsuárioParaTenantMutationError = HttpValidationProblemDetails | ProblemDetails

    /**
 * @summary Atualiza um usuário para os tenants especificados.
 */
export const useAtualizarUsuárioParaTenant = <TError = HttpValidationProblemDetails | ProblemDetails,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof atualizarUsuárioParaTenant>>, TError,{data: UserTenantCreateUpdateRequest;params: AtualizarUsuárioParaTenantParams}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationReturnType<
        Awaited<ReturnType<typeof atualizarUsuárioParaTenant>>,
        TError,
        {data: UserTenantCreateUpdateRequest;params: AtualizarUsuárioParaTenantParams},
        TContext
      > => {

      const mutationOptions = getAtualizarUsuárioParaTenantMutationOptions(options);

      return useMutation(mutationOptions);
    }
    