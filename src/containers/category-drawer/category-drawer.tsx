import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAction } from "hooks";
import { types, urls } from "utils";
import { Drawer, Loading } from "components";

export const CategoryDrawer = () => {
  const dispatch = useDispatch();
  const { onFetch } = useAction();
  const { push } = useHistory();
  const { data, loading, error } = useSelector(
    (state: IState) => state.categories
  );

  const fetchCategories = useCallback(
    () =>
      dispatch(
        onFetch({
          type: types.FETCH_CATEGORIES,
          url: urls.categories,
        })
      ),
    []
  );

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Drawer open>
      {data.length === 0 && loading ? (
        <Loading>Loading Categories...</Loading>
      ) : error ? (
        <Loading>Something went wrong ...</Loading>
      ) : (
        <List>
          <Loading>Categories</Loading>
          {(data || []).map((categoty) => (
            <ListItem
              as="button"
              key={categoty.id}
              onClick={() => push(`/cats/${categoty.id}`)}
            >
              {categoty.name}
            </ListItem>
          ))}
        </List>
      )}
    </Drawer>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const ListItem = styled.div`
  width: 100%;
  margin: 10px auto;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
`;
