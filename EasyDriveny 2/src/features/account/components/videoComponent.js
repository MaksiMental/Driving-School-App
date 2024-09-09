import * as React from "react";
import { View, Button } from "react-native";
import { Video } from "expo-av";

const VideoComponent = ({ source }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={{ backgroundColor: "#000000" }}>
      <Video
        style={{ width: "100%", height: "100%" }}
        ref={video}
        source={source}
        useNativeControls
        resizeMode="stretch"
        isMuted
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
};

export default VideoComponent;
