import { useState } from "react";
import { Text } from "react-native";
import { Channel, ChannelList, MessageInput, MessageList } from "stream-chat-expo";
import { Channel as ChannelType, StreamChat } from 'stream-chat';
import { router } from "expo-router";

export default function MainTabScreen() {
    return (
        <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />
    )
}