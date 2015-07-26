# Danta
Danta is a Sinatra API to play videos using omxplayer on a Raspberry Pi.

## Installation
Danta uses [Pecari](https://github.com/caedocha/pecari) to play videos, so install the following packages:

```
sudo apt-get install xdotool omxplayer
```
## Usage

To start Danta, do the following:
```
cd /path/to/danta
bundle install
rackup
```

We're done. You can access Danta on localhost:9292

## Endpoints

Danta offers the following endpoints:

**/** Lists all the available videos (mp4, mov and mkv) available in the directories specified in video_library.yml in the config directory.

**/launch** Launches the video specified in the video parameter. For example: /launch?video=/path/to/video.mov

**/exec** Executes the command passed as a parameter. For example: /exec?command=play_pause

For more information, check [Pecari](https://github.com/caedocha/pecari#usage)
