import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type CommerceProductFieldsFragment = { __typename: 'CommerceProduct', commercetoolLink?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfCommerceProductQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfCommerceProductQuery = { __typename?: 'Query', commerceProduct?: (
    { __typename?: 'CommerceProduct' }
    & CommerceProductFieldsFragment
  ) | null };

export const CommerceProductFieldsFragmentDoc = `
    fragment CommerceProductFields on CommerceProduct {
  __typename
  sys {
    id
  }
  commercetoolLink
}
    `;
export const CtfCommerceProductDocument = `
    query CtfCommerceProduct($id: String!, $locale: String, $preview: Boolean) {
  commerceProduct(id: $id, preview: $preview, locale: $locale) {
    ...CommerceProductFields
  }
}
    ${CommerceProductFieldsFragmentDoc}`;
export const useCtfCommerceProductQuery = <
      TData = CtfCommerceProductQuery,
      TError = unknown
    >(
      variables: CtfCommerceProductQueryVariables,
      options?: UseQueryOptions<CtfCommerceProductQuery, TError, TData>
    ) =>
    useQuery<CtfCommerceProductQuery, TError, TData>(
      ['CtfCommerceProduct', variables],
      customFetcher<CtfCommerceProductQuery, CtfCommerceProductQueryVariables>(CtfCommerceProductDocument, variables),
      options
    );

useCtfCommerceProductQuery.getKey = (variables: CtfCommerceProductQueryVariables) => ['CtfCommerceProduct', variables];
;

useCtfCommerceProductQuery.fetcher = (variables: CtfCommerceProductQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfCommerceProductQuery, CtfCommerceProductQueryVariables>(CtfCommerceProductDocument, variables, options);