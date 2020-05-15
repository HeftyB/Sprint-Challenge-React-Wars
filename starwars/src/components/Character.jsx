// Write your Character component here
import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    ListGroup, 
    ListGroupItem } from 'reactstrap'
  

export default function Character(props) {

 const {rmData, activeIndex, setActiveIndex, animating, setAnimating} = props;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === rmData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? rmData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = rmData.map((item) => {
    return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.id}>
            <h2>Character's Name :</h2>
            <h2>{item.name}</h2>
            <img className="mainImg" src={item.image} alt={item.id} />
            <ListGroup>
            <ListGroupItem>Species: {item.species}</ListGroupItem>
            <ListGroupItem>Gender: {item.gender}</ListGroupItem>  
            <ListGroupItem>Status: {item.status}</ListGroupItem>
            <ListGroupItem>Location: {item.location.name}</ListGroupItem>
            <ListGroupItem>Origin: {item.origin.name}</ListGroupItem>
            <ListGroupItem>API ID: {item.id}</ListGroupItem>
            </ListGroup>
        </CarouselItem>
      );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={rmData} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    )
}
