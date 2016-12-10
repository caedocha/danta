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

### Clone and set-up Danta repository

Danta is a repository, not a gem... yet. Therefore, you need to clone it in your Raspberry Pi.

```
git clone https://github.com/caedocha/danta.git
cd /path/to/danta
bundle install
```

### Add Video Library file

Danta needs to know where is your video library. Add a `video_library.yml` file in the config directory.

```
cd /path/to/danta/config/
cp video_library.yml.sample video_library.yml
vim video_library.yml # Add your video library path here.
```

## Usage

To start Danta, run the following command:

```
cd /path/to/danta
rackup --host 0.0.0.0. -p 9292
```

We're done. You can access Danta on `localhost:9292`. If you're going to access Danta with another device such as a smartphone, use your raspberry pi's IP instead of localhost, like this: `192.168.1.10:9292`, for example.

## Supported Formats

Danta only supports `mkv`, `mov` and `mp4` videos. Any other video type is filtered out.

For more information, check [Pecari Usage Guide](https://github.com/caedocha/pecari#usage)

## Contact

You can send me an email to caedo.00 at gmail dot com. All feedback or questions are welcomed.
