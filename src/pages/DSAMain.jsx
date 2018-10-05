import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DSAInfoBox from '../controls/DSAInfoBox';
import DSAButton from '../controls/DSAButton';
import { DSAGrid, DSAGridItem, DSAGridRow} from '../controls/DSAGrid';
import DSAMediaCard from '../controls/DSAMediaCard';
import DSADialog from '../controls/DSADialog';
import DSADescription from '../controls/DSADescription';
import {mapObject} from '../controls/DSAUtils';
import {DSARandomAttack} from '../data/DSARandomAttackTables';

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

  getSuccesses() {
    return SUCCESSES.map((success, index) =>
      this.getGridItem(success, index)
    );
  }

  getFails() {
    return FAILS.map((fails, index) =>
      this.getGridItem(fails, index)
    );
  }

  render() {
    const { classes } = this.props;
    return (<div>
      <main className={classes.root}>
        <DSAGrid>
          <DSAGridRow>
            <DSAInfoBox title="Kritische Erfolge" />
          </DSAGridRow>
          <DSAGrid>
            {this.getSuccesses()}
          </DSAGrid>
          <DSAGridRow>
            <DSAInfoBox title="Kritische Fehlschläge" />
          </DSAGridRow>
          <DSAGrid>
            {this.getFails()}
          </DSAGrid>
        </DSAGrid>
        <DSADialog
          handleClose={this.handleClose}
          open={this.state.open}
          actions={this.getDialogActions()}
          title={this.state.current.title}>
          {this.state.current.description}
        </DSADialog>
      </main>
      <footer>
        <DSAGrid>
          <DSAGridRow>
            <DSAInfoBox>
              <DSADescription caption="Impressum">
                Website von David Pfahler.
                Dieses Produkt wurde unter Lizenz erstellt. Das Schwarze Auge und sein Logo sowie Aventuria, Dere, Myranor, Riesland, Tharun und Uthuria
                und ihre Logos sind eingetragene Marken von Significant GbR in Deutschland, den U.S.A. und anderen Ländern. Ulisses Spiele und sein Logo
                sind eingetragene Marken der Ulisses Medien und Spiele Distribution GmbH.
                Dieses Werk enthält Material, das durch Ulisses Spiele und/oder andere Autoren urheberrechtlich geschützt ist. Solches Material wird mit
                Erlaubnis im Rahmen der Vereinbarung über Gemeinschaftsinhalte für SCRIPTORIUM AVENTURIS verwendet.
                Alle anderen Originalmaterialien in diesem Werk sind Copyright 2018 von Moritz Schmid und werden im Rahmen der Vereinbarung über
                Gemeinschaftsinhalte für SCRIPTORIUM AVENTURIS veröffentlicht.
              </DSADescription>
            </DSAInfoBox>
          </DSAGridRow>
        </DSAGrid>
      </footer>
    </div>);
  }
};

DSAMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSAMain);
