import { Avatar, Blockquote, Rating } from "flowbite-react";
import RatingComponent from "./RatingComponent";

const FeedBackComponet = () => {
  return (
    <div className="w-full">
      <RatingComponent />
      <figure className="max-w-screen-sm">
        <Blockquote>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </Blockquote>
        <figcaption className="mt-6 flex items-center space-x-3">
          <Avatar
            rounded
            size="xs"
            img="https://media.cnn.com/api/v1/images/stellar/prod/210709050012-giant-panda-china-file.jpg?q=x_0,y_0,h_900,w_1599,c_fill/h_833,w_1480"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              CTO at Flowbite
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
export default FeedBackComponet;
