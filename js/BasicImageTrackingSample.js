'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroBox,
  ViroCamera,
  ViroLightingEnvironment,
  ViroMaterials,
  ViroNode,
  ViroSphere,
  ViroSpotLight,
  ViroQuad,
} from 'react-viro';

var createReactClass = require('create-react-class');
var CONTROLLER_PUSH = 1;
var CONTROLLER_GRIP = 2;
var CONTROLLER_PULL = 3;

var ARBasketBallDemo = createReactClass({
  getInitialState() {
    this.ballProperties = {friction:0.6, type:'Dynamic', mass:4, enabled:true, useGravity:false, shape:{type:'Sphere', params:[0.14]}, restitution:0.65};
    return {
      controllerConfig:CONTROLLER_GRIP,
      activeCamera:true,
      foundPlane:true,
      texture: "white",
      playAnim: false,
      animateCar: false,
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    }
  },

  render: function() {

    console.log(this.ballProperties);
    this.ballProperties = {friction:0.6, type:'Dynamic', mass:4, enabled:true, useGravity:false, shape:{type:'Sphere', params:[0.14]}, restitution:0.65};

    return (
      <ViroARScene physicsWorld={{ gravity:[0,-9.81,0], drawBounds:this.state.showCollisionBox }} ref={(component)=>{this.sceneRef = component}}>
        <ViroAmbientLight color={"#FFFFFF"} intensity={10}/>
        <ViroLightingEnvironment source={require('./res/physics/ibl_envr.hdr')}/>

        {/*
        <ViroARImageMarker target={"logo"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>*/}

          {/* A Tesla Model Object
          <Viro3DObject
            scale={[0, 0, 0]}
            source={require('./res/tesla/object_car.obj')}
            resources={[require('./res/tesla/object_car.mtl'),
                        ]}
            type="OBJ"
            materials={this.state.texture}
            onClick={this._toggleButtons}
            animation={{name:"scaleCar", run:this.state.animateCar,}} />
           */}

           {/*
          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0,-1,0]}
            position={[0, 5, 1]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={.7} />*/}

            {/* Hoop representing basketball hoop on 3D printed object.
            <Viro3DObject
                source={require("./res/physics/untitled.obj")}
                resources={[require('./res/physics/untitled.mtl'),]}
                highAccuracyEvents={true}
                position={[0, 90, 0]}
                scale={[.2, .2, .2]}
                rotation={[0, 0, 0]}
                type="OBJ"/>
            */}

             {/* Box representing the backboard.
             <ViroBox
               rotation={[90, 0, 90]}
               position={[0,0,-.1]}
               scale={[.3,.3,.3]}
               materials={'whiteBox'}
               physicsBody={{ type:'Static', restitution:0.25 }}
               height={1} width={.25} length={2}
               />*/}


             {/*  Boxes representing the hoop
             <ViroBox
               position={[0,0,0]}
               scale={[.05,.05,.05]}
               rotation={[90, 90, 90]}
               materials={'orange'}
               physicsBody={{ type:'Static', restitution:0.75 }}
               height={0.25} width={.25} length={2}
               />
             <ViroBox
               position={[-1.582/20,.707/20,0]}
               scale={[.05,.05,.05]}
               rotation={[90, 90, 45]}
               materials={'orange'}
               physicsBody={{ type:'Static', restitution:0.75 }}
               height={0.25} width={.25} length={2}
               />
             <ViroBox
               position={[-2.29/20,2.29/20,0]}
               scale={[.05,.05,.05]}
               rotation={[90, 90, 0]}
               materials={'orange'}
               physicsBody={{ type:'Static', restitution:0.75 }}
               height={0.25} width={.25} length={2}
               />
             <ViroBox
               position={[-1.582/20,3.871/20,0]}
               scale={[.05,.05,.05]}
               rotation={[90, 90, 135]}
               materials={'orange'}
               physicsBody={{ type:'Static', restitution:0.75 }}
               height={0.25} width={.25} length={2}
               />
             <ViroBox
               position={[0,4.578/20,0]}
               scale={[.05,.05,.05]}
               rotation={[90, 90, 90]}
               materials={'orange'}
               physicsBody={{ type:'Static', restitution:0.75 }}
               height={0.25} width={.25} length={2}
               />
             <ViroBox
               position={[1.582/20,3.871/20,0]}
               scale={[.05,.05,.05]}
               rotation={[90, 90, 225]}
               materials={'orange'}
               physicsBody={{ type:'Static', restitution:0.75 }}
               height={0.25} width={.25} length={2}
               />
             <ViroBox
               position={[2.29/20,2.29/20,0]}
               scale={[.05,.05,.05]}
               rotation={[90, 90, 180]}
               materials={'orange'}
               physicsBody={{ type:'Static', restitution:0.75 }}
               height={0.25} width={.25} length={2}
               />
             <ViroBox
               position={[1.582/20,.707/20,0]}
               scale={[.05,.05,.05]}
               rotation={[90, 90, 315]}
               materials={'orange'}
               physicsBody={{ type:'Static', restitution:0.75 }}
               height={0.25} width={.25} length={2}
               />*/}


             {/*
             </ViroARImageMarker>*/}

             {/* A Single Ball we have spawned in our scene
                 <Viro3DObject ref={(obj)=>{this.ball = obj}}
                              source={require('./res/physics/object_basketball_pbr.vrx')}
                              scale={[0.5, 0.5, 0.5]}
                              position={[0, 0, -1]}
                              rotation={[0, 0, 0]}
                              resources={[require('./res/physics/blinn1_Base_Color.png'),
                                          require('./res/physics/blinn1_Metallic.png'),
                                          require('./res/physics/blinn1_Roughness.png'),
                                          require('./res/physics/blinn1_Normal_OpenGL.png')]}
                              type="VRX"
                              physicsBody={this.ballProperties}
                              viroTag="BallTag"
                              onClick={this._onClick}
                              onDrag={this.state.controllerConfig == CONTROLLER_GRIP ? ()=>{} : undefined}/>*/}

              {/* A Single Ball we have spawned in our scene*/}
              {this._displayBall()}

      </ViroARScene>
    );
  },
  _displayBall() {
    if (this.state.foundPlane != true){
      return;
    }
    return(
      <Viro3DObject ref={(obj)=>{this.ball = obj}}
                    source={require('./res/physics/object_basketball_pbr.vrx')}
                    scale={[0.5, 0.5, 0.5]}
                    position={[0, 0, -1.0]}
                    rotation={[0, 0, 0]}
                    resources={[require('./res/physics/blinn1_Base_Color.png'),
                                require('./res/physics/blinn1_Metallic.png'),
                                require('./res/physics/blinn1_Roughness.png'),
                                require('./res/physics/blinn1_Normal_OpenGL.png')]}
                    type="VRX"
                    physicsBody={this.ballProperties}
                    viroTag="BallTag"
                    onClick={this._onClick}
                    onDrag={this.state.controllerConfig == CONTROLLER_GRIP ? ()=>{} : undefined}/>
    )
  },
  _onClick(source) {
    console.log("Clicked the ball");
    this.state.controllerConfig == CONTROLLER_PUSH ? this.onItemPushImpulse("BallTag") : undefined;
    this.ball.setNativeProps({"useGravity":true});
    var phyzProps = {type:'Dynamic', mass:4, enabled:true, useGravity:true, shape:{type:'Sphere', params:[0.14]}, restitution:0.65};
    this.ball.setNativeProps({"physicsBody":phyzProps});
  },
  _onAnchorFound() {

    console.log("Anchor found");

    this.setState({
      foundPlane: true,
      animateCar: true,
      pauseUpdates: true,
    })
  },
  _toggleButtons() {
    this.setState({
      animName: (this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  },
  _animateFinished(){
    this.setState({
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    })
  },

  /*
   Push against the ball with an impulse force, at the onClicked location, and
   with a force direction originating from the controller (controller forward).
   */
  onItemPushImpulse(itemTag){
    return (clickedPos, source) =>{
      this.controllerRef.getControllerForwardAsync().then((forward)=>{
        var pushStrength = 3;
        var pushImpulse = [forward[0]*pushStrength, forward[1]*pushStrength, forward[2]*pushStrength];
        this.ball.getTransformAsync().then((transform) => {
          var pos = transform.position;
          var pushPosition = [clickedPos[0] - pos[0], clickedPos[1] - pos[1], clickedPos[2] - pos[2]];
          this.ball.applyImpulse(pushImpulse, pushPosition);
        });
      });
    }
  },

  /*
   Pull the ball with a constant force towards the camera.
   */
  onItemPullForce(itemTag){
    return (state, position, source) => {
      this.sceneRef.getCameraOrientationAsync().then((camTransform)=>{
        this.ball.getTransformAsync().then((ballTransform)=>{
          var ballPos = ballTransform.position;
          var camPos = camTransform.position;
          var pullVec = [camPos[0] - ballPos[0], camPos[1] - ballPos[1], camPos[2] - ballPos[2]];

          var pullStrength = 5; // Force multiplier.
          var pullStrengthVec = [pullVec[0]*pullStrength, pullVec[1]*pullStrength, pullVec[2]*pullStrength];  // Force in newtons
          if (state == 1) {
            var phyzProps = {force:{value:pullStrengthVec}, type:'Dynamic', mass:4, enabled:true, useGravity:true, shape:{type:'Sphere', params:[0.14]}, restitution:0.65};
          } else {
            var phyzProps = {type:'Dynamic', mass:4, enabled:true, useGravity:true, shape:{type:'Sphere', params:[0.14]}, restitution:0.65};
          }
          this.ball.setNativeProps({"physicsBody":phyzProps});
        });
      });
    }
  },

});

ViroMaterials.createMaterials({
  ground: {
    diffuseColor: "#007CB6E6"
  },
  whiteBox: {
    diffuseColor: "#FFFFFF"
  },
  orange: {
    diffuseColor: "#ff8d00"
  },
});

ViroARTrackingTargets.createTargets({
  logo : {
    source : require('./res/bulls.jpg'),
    orientation : "Up",
    physicalWidth : 0.165 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
    scaleUp:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
                  duration: 500, easing: "bounce"},
    scaleDown:{properties:{scaleX:0, scaleY:0, scaleZ:0,},
                  duration: 200,},
    scaleCar:{properties:{scaleX:.09, scaleY:.09, scaleZ:.09,},
                  duration: 500, easing: "bounce"},
    scaleSphereUp:{properties:{scaleX:.8, scaleY:.8, scaleZ:.8,},
                  duration: 50, easing: "easeineaseout"},
    scaleSphereDown:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
                  duration: 50, easing: "easeineaseout"},
    tapAnimation:[["scaleSphereUp", "scaleSphereDown"],]
});

module.exports = ARBasketBallDemo;
