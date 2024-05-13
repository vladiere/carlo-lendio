export interface Albums {
  height: number;
  url: string;
  width: number;
}

export interface Artists {
  href: string;
  id: string;
  name: string;
  uri: string;
}

export interface DefaultTracks {
  albums: Albums,
  artist: Artists,
  name: string;
  popularity: number;
  uri: string;
}

export interface Message {
  socketId: string;
  name: string;
  timestamp: string;
  user_id: number;
  message: string;
}
