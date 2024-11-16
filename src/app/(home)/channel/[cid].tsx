import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { Channel as ChannelType, StreamChat } from 'stream-chat';
import { Channel, MessageInput, MessageList, useChatContext } from "stream-chat-expo";


export default function ChannelScreen() {
    const [channel, setChannel] = useState<ChannelType | null>();
    const { cid } = useLocalSearchParams<{ cid: string }>();

    const { client } = useChatContext();

    useEffect(() => {
        const fetchChannel = async () => {
            const res = await client.queryChannels({ cid });
            setChannel(res[0]);
        }
        fetchChannel();
    }, [cid])

    if (!channel) {
        return <ActivityIndicator />
    }

    return (
        <Channel channel={channel}>
            <MessageList />
            <MessageInput />
        </Channel>
    )
}