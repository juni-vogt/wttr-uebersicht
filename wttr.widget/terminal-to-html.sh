# selects the correct binary based on your system (silicon or intel)

# from https://stackoverflow.com/a/48679640/1974674
architecture=""
case $(uname -m) in
    i386)   architecture="386" ;;
    i686)   architecture="386" ;;
    x86_64) architecture="amd64" ;;
    arm)    dpkg --print-architecture | grep -q "arm64" && architecture="arm64" || architecture="arm" ;;
esac

case $architecture in
    "amd64")   exec ./terminal-to-html-3.6.1-darwin-amd64 ;;
    "arm64")   exec ./terminal-to-html-3.6.1-darwin-arm64 ;;
    *) echo "No compatible binary available." && exit 1
esac

