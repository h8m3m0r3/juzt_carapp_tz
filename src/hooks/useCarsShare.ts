import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CarInfoType } from "../common";
import { CarsInfo } from "../services";

const useCarsShare = () => {
  const [data, setData] = useState<CarInfoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("newest");
  const [sortParams, setSortParams] = useState("");
  const [filterParams, setFilterParams] = useState("");

  const navigate = useNavigate();

  async function loadMoreCards() {
    if (hasMore) {
      try {
        const res = await CarsInfo.getCars(
          `_page=${page}&_limit=5${sortParams}${filterParams}`
        );
        if (res.data.length) {
          setData((prev) => prev.concat(res.data));
          setPage((prev) => prev + 1);
        } else {
          setHasMore(false);
        }
      } catch (error) {
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  }
  async function getCarsData() {
    try {
      const res = await CarsInfo.getCars(
        `_page=${page}&_limit=5${sortParams}${filterParams}`
      );
      if (res.data.length) {
        setData(res.data);
        setPage((prev) => prev + 1);
      } else {
        setData(res.data);
        setHasMore(false);
      }
    } catch (error) {
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }
  useEffect(() => {
    getCarsData();
  }, [sortParams, filterParams]);

  const handleNavigate = (link: string) => {
    navigate(link);
  };
  useEffect(() => {
    if (sort === "newest") {
      setSortParams("");
    } else if (sort === "priceToLow") {
      setSortParams("&_sort=price&_order=desc");
    } else if (sort === "priceToMax") {
      setSortParams("&_sort=price&_order=asc");
    } else if (sort === "yearToLow") {
      setSortParams("&_sort=year&_order=desc");
    } else if (sort === "yearToMax") {
      setSortParams("&_sort=year&_order=asc");
    }
    setHasMore(true);
    setPage(1);
  }, [sort]);
  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };
  return {
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
  };
};
export { useCarsShare };
