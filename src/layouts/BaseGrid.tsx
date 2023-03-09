// BaseGrid.ts

import React, { useState } from 'react';
import { Container, Grid, Pagination } from '@mui/material';

interface BaseGridProps<T> {
  cardData: T[];
  itemsPerPage?: number;
}

interface BaseGridState {
  currentPage: number;
}

abstract class BaseGrid<T> extends React.Component<BaseGridProps<T>, BaseGridState> {
  static defaultProps = {
    itemsPerPage: 12,
  };

  constructor(props: BaseGridProps<T>) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    this.setState({
      currentPage: value,
    });
  };

  renderCards() {
    const { cardData, itemsPerPage } = this.props;
    const { currentPage } = this.state;
    const totalPages = Math.ceil(cardData.length / itemsPerPage!);
    const indexOfLastItem = currentPage * itemsPerPage!;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage!;
    const currentPosts = cardData.slice(indexOfFirstItem, indexOfLastItem);

    return currentPosts.map((card) => {
      return this.renderCard(card);
    });
  }

  abstract renderCard(card: T): React.ReactNode;

  render() {
    const { itemsPerPage } = this.props;
    const { currentPage } = this.state;
    const { cardData } = this.props;
    const totalPages = Math.ceil(cardData.length / itemsPerPage!);

    return (
      <Container maxWidth="xl" style={{ padding: '25px' }}>
        <Grid container spacing={3}>
          {this.renderCards()}
        </Grid>
        <Grid item style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={this.handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Grid>
      </Container>
    );
  }
}

export default BaseGrid;
