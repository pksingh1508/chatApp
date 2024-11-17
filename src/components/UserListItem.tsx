import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase';
import { useChatContext } from 'stream-chat-expo';
import { useAuth } from '../providers/AuthProvider';
import { router } from 'expo-router';

const UserListItem = ({ user }: any) => {
    const [imgUrl, setImgUrl] = useState('');
    const { client } = useChatContext();
    const { user: me } = useAuth();
    useEffect(() => {
        const url = supabase.storage.from('avatars').getPublicUrl(user.avatar_url).data.publicUrl;
        setImgUrl(url);
    }, [])

    const onPress = async () => {
        // start a chat with him.
        const channel = client.channel('messaging', {
            members: [me.id, user.id],
        });
        await channel.watch();
        router.replace(`/(home)/channel/${channel.cid}`);
    }

    return (
        <Pressable android_ripple={{ color: 'gray' }} onPress={onPress} style={{ padding: 15, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', gap: 10, overflow: 'hidden' }}>
            <Image source={{ uri: imgUrl }} width={40} height={40} style={{ borderRadius: 100 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{user?.full_name}</Text>
        </Pressable>
    )
}

export default UserListItem;