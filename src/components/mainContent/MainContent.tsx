import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { MiniLoader } from "../loaders";
import { ContentForm, ContentCard } from ".";
import { useCarsShare } from "/@/hooks";

import "./MainContent.scss";

const MainContent = () => {
  const {
    setFilterParams,
    setPage,
    setHasMore,
    handleChangeSort,
    sort,
    loading,
    data,
    loadMoreCards,
    hasMore,
    handleNavigate,
  } = useCarsShare();
  return (
    <div className="main__content container">
      <h1 className="content__header">CarSell - Продажа автомобилей</h1>
      <ContentForm
        setFilterParams={setFilterParams}
        setPage={setPage}
        setHasMore={setHasMore}
      />
      <div className="main__sort">
        <select onChange={handleChangeSort} value={sort}>
          <option value="newest">Сортировка</option>
          <option value="priceToLow">По цене: По уменьшению</option>
          <option value="priceToMax">По цене: По возрастанию</option>
          <option value="yearToLow">По году: Младше</option>
          <option value="yearToMax">По году: Старше</option>
        </select>
      </div>
      {loading ? (
        <MiniLoader />
      ) : (
        <div className="main__cards">
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreCards}
            hasMore={hasMore}
            loader={<div>.</div>}
          >
            {data.map((item) => {
              return (
                <ContentCard
                  key={item.id}
                  cardItem={item}
                  handleNavigate={handleNavigate}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
};

export { MainContent };
