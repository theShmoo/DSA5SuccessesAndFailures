import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DSAInfoBox from '../controls/DSAInfoBox';
import { DSAGrid, DSAGridItem, DSAGridRow} from '../controls/DSAGrid';
import DSAMediaCard from '../controls/DSAMediaCard'
const styles = {
  root: {
    flexGrow: 1,
  }
};

class DSAMain extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.root}>
        <DSAGrid>
          <DSAGridRow>
            <DSAInfoBox text="Klicke auf eine der Karten um eine Zufallsaktion auszulösen" />
          </DSAGridRow>
          <DSAGridItem xs={12} md={6} lg={4} >
            <DSAMediaCard imagesrc="" imagetitle="test" title="Test1">
              Test Text 1
            </DSAMediaCard>
          </DSAGridItem>
          <DSAGridItem xs={12} md={6} lg={4} >
            <DSAMediaCard imagesrc="" imagetitle="test" title="Test2">
              Test Text 2
            </DSAMediaCard>
          </DSAGridItem>
          <DSAGridItem xs={12} md={6} lg={4} >
            <DSAMediaCard imagesrc="" imagetitle="test" title="Test3">
              Test Text 3
            </DSAMediaCard>
          </DSAGridItem>
        </DSAGrid>
      </main>
    );
  }
};

DSAMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DSAMain);
