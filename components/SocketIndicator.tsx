"use client";

import React from "react";
import { useSocket } from "./providers/SocketProvider";
import { Badge } from "./ui/Badge";

const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant={"outline"} className="bg-yellow-600 text-white">
        Fallback: Polling every 1s
      </Badge>
    );
  }

  return (
    <Badge variant={"outline"} className="bg-emerald-600 text-white">
      Live: Realtime updates
    </Badge>
  );
};

export default SocketIndicator;
