import { Button } from "../stories/Button";

import profileImg from "./../assets/images/profile-pic.png"
import commentImg from "./../assets/images/comments.png"
import heartIcon from "./../assets/icons/heart.png"
import { Icon } from '@iconify/react';
import { PropsWithChildren, useState } from "react";
import { Container, PageContainer } from "../components/styled/Container.styled";
import { ActionContainer, CommentListContainer, DetailsContainer, ImageContainer, LeftSideComment, NewCommentContainer, RightSide, StyledTabsContainer, TimeBox } from "../components/styled/PostDetails.styled";
import { FixedContainer, ProfileHeaderContainer, RoundedImage } from "../components/styled/PostNav.styled";
import { StyledHeader, StyledText } from "../components/styled/TextStyle.styled";
import { CarouselImages } from "../components/Carousel";
export const Order: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    return <>
        <PageContainer>
            <ImageContainer>
                <span>
                    <Icon icon="material-symbols-light:close" color="#fff" height="24" />
                </span>
                <CarouselImages />
            </ImageContainer>
            <DetailsContainer>

                <PostHeader />
                <Container direction="column" gap={10} items="match-parent" mt="sm" mb="sm">
                    <Button label="Chat with seller" colorMode={"secondary"}>
                        <Icon icon="ion:mail-outline" height="24" />
                    </Button>
                    <Button label="Send an sms" backgroundColor="#F8F8F8" border="1px solid #C3C3C3" color="#000">
                        <Icon icon="cil:send" height="24" />
                    </Button>
                </Container>

                <div style={{ height: '1px', backgroundColor: '#00000030' }} />
                <Actions />
                <StyledTabsContainer>
                    <ul>
                        {tabs.map((x, idx) => (
                            <li key={idx}>
                                <button
                                    onClick={() => setSelectedTab(idx)}
                                    className={idx === selectedTab ? 'active' : ''}
                                    aria-current={idx === selectedTab ? 'page' : undefined}
                                >
                                    {x.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </StyledTabsContainer>

                {tabs[selectedTab].content}

            </DetailsContainer>
        </PageContainer>
    </>
}

export default function NewComment() {
    return (
        <NewCommentContainer>
            <textarea name="postContent" rows={1} cols={40} placeholder="Write your quick comment..." />
            <div>

                <Icon icon="uiw:like-o" height={15} />
                <Icon icon="uiw:like-o" height={15} />
                <Icon icon="uiw:like-o" height={15} />
            </div>
        </NewCommentContainer>
    );
}


const PostHeader = () => <div className="bg-[#F8F8F8] px-6 py-3 rounded-lg">
    <ProfileHeader />
    <StyledHeader>White and Green Blouse</StyledHeader>
    <StyledText size="xs" color="#00000050">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra</StyledText>
    <Container justify="start" flexwrap="wrap" gap={10} mt="sm">
        <Container >
            <StyledHeader size="xl" fontWeight={400}>$ 1085.20</StyledHeader>
            <StyledText className="text-sm">(ETH 0.00123 )</StyledText>
        </Container>
        <TimeBox>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 11.9l-.7 1.3l-5.3-2.9V7h1.5v4.4z" /></svg>
            <div>09h 30 m</div>
        </TimeBox>
    </Container>
    <Container mt="sm" flexgrow={1} gap={10} >
        <Button outline={true} label="Add to Cart">
            <Icon icon="solar:cart-large-2-linear" height="24" color="#3B8BF1" />
        </Button>
        <Button label="Buy Now">
            <Icon icon="solar:wallet-linear" height="24" />
        </Button>
    </Container>
</div>


const ProfileHeader = () => (
    <ProfileHeaderContainer>
        <Container>

            <FixedContainer>
                <div>
                    <Icon icon="tabler:check" color="#ffffff" />
                </div>
            </FixedContainer>
            <RoundedImage src={profileImg} />

            <StyledText ml="xs" fontWeight={600} size="lg">FLAIR</StyledText>
        </Container>
        <Icon icon="ri:more-2-line" />

    </ProfileHeaderContainer>
);


const ActionIcon = ({ children, count }: PropsWithChildren<{ count: number }>) => <ActionContainer gap={10}>
    <div>
        {children}
    </div>
    <div>{count}</div>
</ActionContainer>

const Actions = () => <Container justify="start" gap={10} mt='sm'>
    <ActionIcon count={155}>
        <img src={heartIcon} alt="" height={24} />
    </ActionIcon>
    <ActionIcon count={155}>
        <Icon icon="eva:message-circle-outline" height={24} />
    </ActionIcon>
    <ActionIcon count={155}>
        <Icon icon="solar:bookmark-broken" height={24} />
    </ActionIcon>
    <ActionIcon count={155}>
        <Icon icon="ph:share-fat" height={24} />
    </ActionIcon>
</Container >






const comments = [
    {
        name: "Xhin",
        time: "6 min ago",
        comment: "wow! all time best one",
        likes: 16,
        replies: 2
    },
    {
        name: "Alex",
        time: "1 day ago",
        comment: "Mind-blowing! This is pure genius.",
        likes: 20,
        replies: 0,
        tag: "@Xhin"
    },
    {
        name: "Eva",
        time: "3 hours ago",
        comment: "I'm speechless. This deserves all the praise!",
        likes: 12,
        replies: 0,
        tag: "@Xhin"
    },
    {
        name: "Chris",
        time: "5 minutes ago",
        comment: "Incredible work! It left me in awe.",
        likes: 15,
        replies: 0,

    },
    {
        name: "Sophie",
        time: "2 days ago",
        comment: "This is the best thing I've seen today. Kudos!",
        likes: 18,
        replies: 0
    },
].map((x => ({ ...x, image: commentImg })))
type Comment = {
    name: string;
    time: string;
    comment: string;
    likes: number;
    replies: number;
    image: string;
    tag?: string;
};



const CommentTile = ({ name, time, comment, likes, replies, image, tag }: PropsWithChildren<Comment>) =>
    <Container justify="space-between" pl="lg" items="center" >
        <LeftSideComment>
            <img src={image} alt="User Avatar" />
            <div>
                <div>
                    <p>{name}</p>
                    <p>{time}</p>
                </div>
                <p>
                    {tag && <span>{tag} </span>}
                    {comment}
                </p>
                {replies > 0 ? (
                    <div>
                        <div></div>
                        <p>{replies} Reply </p>
                    </div>
                ) : (
                    <div>
                        <p>Reply </p>
                    </div>
                )}
            </div>
        </LeftSideComment>
        <RightSide>
            <div>
                <Icon icon="uiw:like-o" className="text-purple-800" />
            </div>
            <p>{likes}</p>
            <Icon icon="ri:more-2-line" height={20} />
        </RightSide>
    </Container>

const tabs = [
    {
        name: "Comments",
        content: <>
            <CommentListContainer>
                {
                    comments.map((x, idx) => <CommentTile {...x} key={idx} />)
                }

            </CommentListContainer>

            <NewComment />

        </>
    },
    {
        name: "items you may like",
        content: <Container > "items you may like"</Container>
    },
    {
        name: "Other Items from seller",
        content: <Container> "items you may like"</Container>
    }
]




