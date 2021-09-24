import { FC } from 'react';
import { server } from '../../lib/api';
import { useQuery } from '../../lib/useQuery';
import {
  ListingsData,
  DeleteListingData,
  DeleteListingVariables,
} from './types';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      numOfGuests
      numOfBeds
      rating
    }
  }
`;

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

interface Props {
  title: string;
}

export const Listings: FC<Props> = ({ title }) => {
  const { data, refetch } = useQuery<ListingsData>(LISTINGS);
  const deleteListing = async (id: string) => {
    await server.fetch<DeleteListingData, DeleteListingVariables>({
      query: DELETE_LISTING,
      variables: {
        id,
      },
    });
    refetch();
  };

  const listings = data ? data.listings : null;
  const listingsList = listings ? (
    <ul>
      {listings.map((listing) => (
        <li key={listing.id}>
          {listing.title}
          <button onClick={() => deleteListing(listing.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div>
      <h2>{title}</h2>
      {listingsList}
    </div>
  );
};
