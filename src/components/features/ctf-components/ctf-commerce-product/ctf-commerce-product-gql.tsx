import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { Container } from '@mui/material';

import { useCtfCommerceProductQuery } from './__generated/ctf-commerce-product.generated';
import { CtfCommerceProduct } from './ctf-commerce-product';

import { EntryNotFound } from '@src/components/features/errors/entry-not-found';

interface CtfProductGqlPropsInterface {
  id: string;
  locale: string;
  preview?: boolean;
}

export const CtfCommerceProductGql = (props: CtfProductGqlPropsInterface) => {
  const { isLoading, data } = useCtfCommerceProductQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview,
  });

  const topicProduct = useContentfulLiveUpdates(data?.commerceProduct);

  if (!data || isLoading) {
    return null;
  }

  if (!topicProduct) {
    return (
      <Container>
        <EntryNotFound />
      </Container>
    );
  }

  return (
    <>
      <CtfCommerceProduct {...topicProduct} />
    </>
  );
};
