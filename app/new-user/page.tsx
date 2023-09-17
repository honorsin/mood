import {q, client} from '../utils/fauna';
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()

  async function findOrCreateUser(clerkId: string) {
    try {
      const userRef = q.Ref(q.Collection('users'), clerkId);
      const exists = await client.query(
        q.Exists(userRef)
      );

      if (exists) {
        // 用户存在，返回用户数据
        const user = await client.query(q.Get(userRef));
        return user.data;
      } else {
        // 用户不存在，创建新用户
        const newUser = await client.query(
          q.Create(userRef, {
            clerkId: user?.id,
            email: user?.emailAddresses[0].emailAddress,
          })
        );
        return newUser.data;
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      throw error;
    } finally {
      await client.close();
    }
  }

  user?.id && findOrCreateUser(user.id);


  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser