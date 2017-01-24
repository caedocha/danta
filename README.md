# Danta
Danta is a web app for easy video playing in your Raspberry Pi.

## Installation

### Install ruby

We're going to use [RVM](https://rvm.io/rvm/install) to install Ruby.

```
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```

### Install xdotool and omxplayer

Danta uses [Pecari](https://github.com/caedocha/pecari) to play videos, so install the following packages:

```
sudo apt-get install xdotool omxplayer
```

### Add Video Library file

Danta needs to know where is your video library. Add a `video_library.yml` file in the home directory.

```
cd ~
vim video_library.yml # Add your video library path here.
```

With the following data:

```
videos:
  - '/path/to/videos/directory/'

```

### Install Danta gem

```
gem install danta
```

## Start Danta

Just call the danta command and the app will be ready to use.

```
danta
```

Access it with your smartphone's browser using the RPi's IP address. This is mine, for example:

```
192.168.1.10:9292
```

### Danta Environment Variables

Danta's behavior can be customized with the following environment variables:

```
DANTA_HOST # Overrides the default host, 0.0.0.0
DANTA_PORT # Overrides the default port, 9292
DANTA_VIDEO_LIBRARY # Overrides the default video library directory, the current user's home directory (~)
```

Examples:

```
export DANTA_HOST=localhost
export DANTA_PORT=9999
export DANTA_VIDEO_LIBRARY=/Other/video/library/directory
```

## Starting Danta at boot

Probably, you want to have Danta starting during boot time. In order to do this, edit the `rc.local` file:

```
sudo vim /etc/rc.local
```

Add the following line at the end of the file:

```
danta &
```

Save, exit and reboot the RPi.

## Supported Formats

Danta only supports `mkv`, `mov` and `mp4` videos. Any other video type is filtered out.

For more information, check [Pecari Usage Guide](https://github.com/caedocha/pecari#usage)

## Contact

You can send me an email to caedo.00 at gmail dot com. All feedback or questions are welcomed.
