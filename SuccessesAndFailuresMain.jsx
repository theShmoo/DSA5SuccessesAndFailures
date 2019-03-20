import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import DSAInfoBox from '../controls/DSAInfoBox';
import DSAButton from '../controls/DSAButton';
import { DSAGrid, DSAGridItem, DSAGridRow} from '../controls/DSAGrid';
import DSAMediaCard from '../controls/DSAMediaCard';
import DSADialog from '../controls/DSADialog';
import {mapObject} from '../controls/DSAUtils';
import {DSARandomAttack} from '../data/DSARandomAttackTables';
import DSAItemList from '../controls/DSAItemList'

const styles = {
  root: {
    flexGrow: 1,
  }
};

function staticGetRandomTable(type) {
  let combinations = [];
  ["attack", "defend"].map((action) =>
    ["distance" , "combat"].map((distance) =>
      combinations.push(DSARandomAttack[type][action][distance])
    )
  );
  return combinations;
}

const SUCCESSES = staticGetRandomTable("successes");
const FAILS = staticGetRandomTable("fails");

class DSAMain extends React.Component {

  state = {
    open: false,
    current : {
      title: "test",
      description: "test !"
    }
  };

  getRandomEntry(array)
  {
    return array[Math.floor(Math.random()*array.length)];
  }

  getFlatternTable(table) {
    let flattenTable = [];
    mapObject(table, (key, value) => {
      value.forEach((v) =>
        flattenTable.push({
          title: key,
          description: v
        })
      );
    });
    return flattenTable;
  }

  handleClickOpen = (table) => (e) => {
    this.setState({
      open: true,
      current: this.getRandomEntry(table)
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getCardActions = (table) => {
    return <DSAButton size="small" onClick={this.handleClickOpen(table)}>
        Generiere Zufalls Ereignis
      </DSAButton>
  }

  getDialogActions() {
    return <DSAButton onClick={this.handleClose}>
        Schließen
      </DSAButton>
  }

  getGridItem(item, index){
      return <DSAGridItem xs={12} md={6} lg={3} key={index}>
        <DSAMediaCard
          imagesrc={item.image}
          imagetitle={item.imagetitle}
          title={item.title}
          content={item.description}
          actions={this.getCardActions(this.getFlatternTable(item.table))} />
      </DSAGridItem>
  }

  getItems(items, title) {
    const { width } = this.props;
    if(isWidthUp('sm', width)) {
      return <DSAGrid>
        <DSAGridRow>
          <DSAInfoBox title={title} />
        </DSAGridRow>
        <DSAGrid>
        {items.map((item, index) => this.getGridItem(item, index))}
        </DSAGrid>
      </DSAGrid>
    }
    else {
      return <DSAInfoBox title={title}><DSAItemList items={items.map((item) => {
        return {
          name: item.title,
          tooltip: item.description,
          action: this.handleClickOpen(this.getFlatternTable(item.table))
        }
      })} /></DSAInfoBox>
    }

  }

  render() {
    const { classes } = this.props;
    return <main className={classes.root}>
            {this.getItems(SUCCESSES, "Kritische Erfolge")}
            {this.getItems(FAILS, "Kritische Fehlschläge")}
        <DSADialog
          handleClose={this.handleClose}
          open={this.state.open}
          actions={this.getDialogActions()}
          title={this.state.current.title}>
          {this.state.current.description}
        </DSADialog>
      </main>;
  }
};

DSAMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withWidth()(withStyles(styles)(DSAMain));
