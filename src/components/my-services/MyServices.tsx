import { getEntriesByType } from '@/helpers';
import {
  TypeMyServices,
  TypeMyServicesCollection,
  TypeMyServicesSkeleton,
} from '@/types/contentfulv10';
import {
  IconDefinition,
  IconLookup,
  IconName,
  findIconDefinition,
  icon,
} from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Services } from '../ui';

const MyServices = () => {
  const [services, setServices] = useState<TypeMyServicesCollection>();

  const getMyServices = async () => {
    const myServices = await getEntriesByType<TypeMyServicesSkeleton>(
      'myServices'
    );

    setServices(myServices);
  };

  useEffect(() => {
    getMyServices();
  }, []);

  return (
    <>
      <section id="services">
        <div className="mt-8 bg-gray-200 px-6 py-7">
          <h1 className="font-bold">My Services</h1>
          <div className="flex gap-4">
            {services?.items?.map((service) => (
              <Services service={service} key={service.sys.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyServices;
