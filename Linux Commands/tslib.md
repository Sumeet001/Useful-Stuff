#Display
DISPLAY=:0.0 xinput_calibrator

DISPLAY=:0.0 xinput list-props 6

cd /usr/share/X11/xorg.conf.d

#Disable Mouse
chmod o-x /usr/bin/xinput

xinput default output
Calibrating EVDEV driver for "ti-tsc" id=6
        current calibration values (from XInput): min_x=209, max_x=3983 and min_y=3671, max_y=173

Doing dynamic recalibration:
        Setting calibration data: 133, 3970, 3769, 159
        --> Making the calibration permanent <--
  copy the snippet below into '/etc/X11/xorg.conf.d/99-calibration.conf'
Section "InputClass"
        Identifier      "calibration"
        MatchProduct    "ti-tsc"
        Option  "Calibration"   "133 3970 3769 159"
        Option  "SwapAxes"      "0"
EndSection
