import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function MyPagination(props) {

  const {getData, currentPageNum, setcurrentPageNum} = props;

  return (
      <Pagination aria-label="Page navigation">
      <PaginationItem>
          <PaginationLink first href="#" onClick={ event => {
            getData("https://rickandmortyapi.com/api/character/")
          }}/>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink previous href="#" onClick={ event => {
            setcurrentPageNum(currentPageNum - 1);
            currentPageNum === 0 ? setcurrentPageNum(1):
            getData(`https://rickandmortyapi.com/api/character/?page=${currentPageNum}`)
          }}/>
        </PaginationItem> */}
        <PaginationItem>
          <PaginationLink href="#" onClick={ event => {
            getData("https://rickandmortyapi.com/api/character/")
          }}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={ event => {
            getData("https://rickandmortyapi.com/api/character/?page=2")
          }}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={ event => {
            getData("https://rickandmortyapi.com/api/character/?page=3")
          }}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={ event => {
            getData("https://rickandmortyapi.com/api/character/?page=4")
          }}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={ event => {
            getData("https://rickandmortyapi.com/api/character/?page=5")
          }}>
            5
          </PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink next href="#" onClick={ event => {
            setcurrentPageNum(+1);
            getData(`https://rickandmortyapi.com/api/character/?page=${currentPageNum}`)
          }}/>
        </PaginationItem> */}
        <PaginationItem>
          <PaginationLink last href="#" onClick={ event => {
            getData("https://rickandmortyapi.com/api/character/?page=29")
          }}/>
        </PaginationItem>
      </Pagination>
  );
}
    
