import { PortfolioModalProps } from '@/helpers/props';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClose, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Transition } from '@headlessui/react';
import { Asset } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const PortfolioModal = ({
  isOpen,
  portfolio,
  setIsOpen,
}: PortfolioModalProps) => {
  const portfolioImage =
    portfolio.fields.image &&
    `https:${
      (portfolio.fields.image as Asset<undefined, string>).fields.file?.url
    }`;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true"></div>
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-xl rounded-md bg-white">
              <div className="flex justify-between items-center">
                <div className="px-6 py-4">
                  <Dialog.Title>
                    <h1 className="font-bold text-lg">
                      {portfolio.fields.title?.toString()}
                    </h1>
                  </Dialog.Title>
                  <Dialog.Description>
                    <h2 className="text-sm text-slate-400">
                      {portfolio.fields.description?.toString()}
                    </h2>
                  </Dialog.Description>
                </div>
                <button className="pr-6" onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon icon={faClose} size="lg" />
                </button>
              </div>
              <div className="relative h-96">
                {portfolioImage && (
                  <Image
                    src={portfolioImage}
                    alt={portfolio.fields.title?.toString() ?? ''}
                    fill
                  />
                )}
                <div className="absolute right-0 bottom-0">
                  <div className="primary-color px-4 py-1 rounded-tl-lg">
                    <div className="flex justify-between items-center gap-4">
                      <Link href={portfolio.fields.projectUrl} target="_blank">
                        <FontAwesomeIcon icon={faGlobe} size="lg" />
                      </Link>
                      <div>
                        <Link href={portfolio.fields.githubUrl} target="_blank">
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PortfolioModal;
