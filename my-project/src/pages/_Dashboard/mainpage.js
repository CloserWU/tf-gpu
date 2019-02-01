import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Avatar, Card } from 'antd';

import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { getTimeDistance } from '@/utils/utils';

import styles from './mainpage.less';
import PageLoading from '@/components/PageLoading';

class mainpage extends Component {
  render() {
    return (
      <PageHeaderWrapper>
        <Carousel autoplay="true" className={styles.carousel}>
          <div>
            <img
              className={styles.img}
              src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"
              width={128}
            />
          </div>
          <div>
            <h3 className={styles.h3}>2</h3>
          </div>
          <div>
            <h3 className={styles.h3}>3</h3>
          </div>
          <div>
            <h3 className={styles.h3}>4</h3>
          </div>
        </Carousel>
        <Row>
          <Col span={12}>
            <img
              className={styles.img1}
              src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"
              width={128}
            />
          </Col>
          <Col span={12}>
            <img
              className={styles.img1}
              src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"
              width={128}
            />
          </Col>
        </Row>
        <Card className={styles.card}>
          <h1 className={styles.h1}>人气单品</h1>
        </Card>
        <Card className={styles.card1}>
          <h3 className={styles.h3}>潮流裙装</h3>
        </Card>
        <Row>
          <Col span={6}>
            <img
              className={styles.img2}
              src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
              width={128}
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.img2}
              src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
              width={128}
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.img2}
              src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
              width={128}
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.img2}
              src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png"
              width={128}
            />
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default mainpage;
