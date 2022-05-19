import React, { useEffect, useState } from 'react';
import { CategoryInfo, GameInfo } from '../../interfaces';
import Card from './Card';
import Sidebar from './Sidebar';

const Dashboard = ({ showSidebar }) => {
  const [gameInfo, setGameInfo] = useState([]);
  const [gameCategoryInfo, setCategoryInfo] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  const SidebarClassName: { show: string; notShow: string } = {
    show: '',
    notShow: '',
  };
  return (
    <div className="">
      <div>
        {[
          'Fighting & Battle',
          'Role-Playing',
          'Action',
          'Adventure',
          'Collector Simulator',
          'Tycoon',
          'Tycoon & Strategy',
        ].map((context, index) => {
          return (
            // <div class="flex flex-col h-screen my-auto items-center align-middle bgimg bg-cover">
            <div key={context}>
              <h4 className="text-3xl font-normal leading-normal mt-2  mb-2 dark:text-gray-900">
                {context}
              </h4>
              <div
                className="grid grid-cols-4 gap-12
                    sm:grid-cols-5 
                    lg:grid-cols-6
                    xl:grid-cols-8 
                    "
              >
                {cardInfo
                  .filter((info) => info.category === index + 1)
                  .slice(0, 5)
                  .map((info) => {
                    return (
                      <Card
                        key={info.name}
                        thumbnail={info.thumbnail}
                        name={info.name}
                        likePercentage={info.likePercentage}
                        viewCount={info.viewCount}
                        category={info.category}
                      ></Card>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
