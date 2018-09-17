'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro360Image,
  ViroMaterials,
  ViroBox,
  ViroQuad,
  Viro3DObject,
  ViroOmniLight,
  ViroController,
  ViroNode,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroFlexView,
  ViroAmbientLight,
  ViroPolygon,
  ViroLightingEnvironment
} from 'react-viro';

import { ARKit } from 'react-native-arkit';

class InvisibleHoop extends Component {
  render() {
    return (
      <ViroNode>
        <ViroBox
          position={[0,0,0]}
          scale={[.1,.1,.1]}
          rotation={[0, 0, 0]}
          materials={'orange'}
          physicsBody={{ type:'Static', restitution:0.75 }}
          height={0.25} width={.25} length={2}
          />
        <ViroBox
          position={[.707/10,0,1.582/10]}
          scale={[.1,.1,.1]}
          rotation={[0, 45, 0]}
          materials={'orange'}
          physicsBody={{ type:'Static', restitution:0.75 }}
          height={0.25} width={.25} length={2}
          />
        <ViroBox
          position={[2.29/10,0,2.29/10]}
          scale={[.1,.1,.1]}
          rotation={[0, 90, 0]}
          materials={'orange'}
          physicsBody={{ type:'Static', restitution:0.75 }}
          height={0.25} width={.25} length={2}
          />
        <ViroBox
          position={[3.871/10,0,1.582/10]}
          scale={[.1,.1,.1]}
          rotation={[0, 135, 0]}
          materials={'orange'}
          physicsBody={{ type:'Static', restitution:0.75 }}
          height={0.25} width={.25} length={2}
          />
        <ViroBox
          position={[4.578/10,0,0/10]}
          scale={[.1,.1,.1]}
          rotation={[0, 180, 0]}
          materials={'orange'}
          physicsBody={{ type:'Static', restitution:0.75 }}
          height={0.25} width={.25} length={2}
          />
        <ViroBox
          position={[3.871/10,0,-1.582/10]}
          scale={[.1,.1,.1]}
          rotation={[0, 225, 0]}
          materials={'orange'}
          physicsBody={{ type:'Static', restitution:0.75 }}
          height={0.25} width={.25} length={2}
          />
        <ViroBox
          position={[2.29/10,0,-2.29/10]}
          scale={[.1,.1,.1]}
          rotation={[0, 270, 0]}
          materials={'orange'}
          physicsBody={{ type:'Static', restitution:0.75 }}
          height={0.25} width={.25} length={2}
          />
        <ViroBox
          position={[.707/10,0,-1.582/10]}
          scale={[.1,.1,.1]}
          rotation={[0, 315, 0]}
          materials={'orange'}
          physicsBody={{ type:'Static', restitution:0.75 }}
          height={0.25} width={.25} length={2}
          />
      </ViroNode>
    );
  }
}
