import React from 'react';
import ScrollIndicator from '../icons/ScrollIndicator';

export default function CommentsStory(props: {
  goToNextSection(): void;
  comment: { name: string; comment: string };
}) {
  const comment = props.comment;
  return (
    <section className="comments min-h-screen px-5 pt-6 pb-28 snap relative">
      <div className="space-y-[4.75rem]">
        <div className="text mt-8 rounded-[.625rem] shadow-card flex flex-col items-center text-center px-5 pt-5">
          <svg
            width="46"
            height="35"
            viewBox="0 0 46 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.2779 35C7.18619 35 4.67938 33.8889 2.75749 31.6667C0.919164 29.359 0 26.3675 0 22.6923C0 17.906 1.37875 13.4615 4.13624 9.35897C6.89373 5.17094 10.3197 2.05128 14.4142 0L15.1662 1.53846C13.4114 2.90598 11.8656 4.65812 10.5286 6.79487C9.19164 8.93162 8.2307 11.5812 7.64578 14.7436L10.2779 15.3846C13.2025 16.0684 15.4587 17.3504 17.0463 19.2308C18.7175 21.0256 19.5531 23.2051 19.5531 25.7692C19.5531 28.5043 18.634 30.7265 16.7956 32.4359C15.0409 34.1453 12.8683 35 10.2779 35ZM36.7248 35C33.6331 35 31.1262 33.8889 29.2044 31.6667C27.366 29.359 26.4469 26.3675 26.4469 22.6923C26.4469 17.906 27.8256 13.4615 30.5831 9.35897C33.3406 5.17094 36.7666 2.05128 40.861 0L41.6131 1.53846C39.8583 2.90598 38.3124 4.65812 36.9755 6.79487C35.6385 8.93162 34.6776 11.5812 34.0926 14.7436L36.7248 15.3846C39.6494 16.0684 41.9055 17.3504 43.4932 19.2308C45.1644 21.0256 46 23.2051 46 25.7692C46 28.5043 45.0808 30.7265 43.2425 32.4359C41.4877 34.1453 39.3152 35 36.7248 35Z"
              fill="#383D4B"
            />
          </svg>
          <p className="mt-5">{comment.comment}</p>
          <p className="mt-5 mb-8 font-bold text-sm">{comment.name}</p>
        </div>
      </div>
      <ScrollIndicator
        onClick={props.goToNextSection}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
      />
    </section>
  );
}
