using AutoMapper;
using Forum.Dtos;
using Forum.Model;

namespace Forum.Profiles 
{
    class TopicsProfile: Profile
    {
        public TopicsProfile()
        {
            CreateMap<Topic, TopicReadDto>();
            CreateMap<Topic, TopicCreateDto>();
            CreateMap<TopicCreateDto, Topic>();
        }
    } 

}