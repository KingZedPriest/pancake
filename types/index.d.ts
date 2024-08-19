//For the DownBar
declare type DownBarLinksProps = {
    icon: React.ReactNode;
    path: string;
    pathName: string;
}

//For the Spinning Wheel
declare type Segment = {
    value: string | number;
    color: string;
    restricted?: boolean;
}

declare type SpinningWheelProps = {
    segments: Segment[];
    onSpinEnd: (selectedSegment: Segment) => void;
}
