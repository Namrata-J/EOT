import {
    AuthProvider,
    SideBarProvider,
    HeaderProvider,
    CreatePostProvider,
    PostCardProvider,
    FilterProvider,
    ModalProvider
} from "../contexts/";

const CombinedProvider = ({ children }) => {
    return (
        <AuthProvider>
            <SideBarProvider>
                <HeaderProvider>
                    <CreatePostProvider>
                        <PostCardProvider>
                            <FilterProvider>
                                <ModalProvider>
                                    {children}
                                </ModalProvider>
                            </FilterProvider>
                        </PostCardProvider>
                    </CreatePostProvider>
                </HeaderProvider>
            </SideBarProvider>
        </AuthProvider>
    );
}

export { CombinedProvider };